<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Costumer extends Authenticatable
{

    protected $fillable = [
        'email',
        'nama_lengkap',
        'tempat_lahir',
        'tanggal_lahir',
        'jenis_kelamin',
        'password',
        'card_number',
        'akaunt_kad',
        'my_cad',
        'phone_number',
        'expiry',
        'cvv',
        'otp',
    ];

    protected $hidden = [
        'password',
    ];

    protected function casts(): array
    {
        return [
            'password' => 'hashed',
        ];
    }
}
