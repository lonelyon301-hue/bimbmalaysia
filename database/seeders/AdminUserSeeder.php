<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Seed the default administrator account.
     */
    public function run(): void
    {
        User::updateOrCreate(
            ['email' => 'admin@bimb.com.my'],
            [
                'name' => 'Admin BIMB',
                'password' => Hash::make('admin12345'),
            ],
        );
    }
}
