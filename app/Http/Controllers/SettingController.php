<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        return inertia('Admin/WhatsappSetting', [
            'setting' => Setting::first() ?? new Setting(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'channel_name' => ['required', 'string', 'max:255'],
            'nomor' => ['required', 'string', 'max:255'],
            'api_key' => ['required', 'string', 'max:255'],
            'send_mode' => ['required', 'string', 'in:Pengeluaran,Ujian Dalaman,Dijeda Sementara'],
        ], [
            'channel_name.required' => 'Nama channel wajib diisi.',
            'nomor.required' => 'Nombor WhatsApp wajib diisi.',
            'api_key.required' => 'API Token wajib diisi.',
            'send_mode.required' => 'Mode penghantaran wajib dipilih.',
        ]);

        Setting::updateOrCreate([], $validated);

        return redirect()
            ->back()
            ->with('success', 'Setting WhatsApp telah disimpan.');
    }
}
