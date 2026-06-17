<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $fillable = [
        'nomor',
        'api_key',
        'channel_name',
        'send_mode',
    ];
}
