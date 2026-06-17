<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Users', [
            'users' => User::query()
                ->latest()
                ->get(['id', 'name', 'email', 'created_at']),
        ]);
    }
}
