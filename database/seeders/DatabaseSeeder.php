<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create(
            [
                'email' => 'admin@bimb.com.my',
                'name' => 'Admin BIMB',
                'password' => bcrypt('admin12345'),

            ]
        );
    }
}
