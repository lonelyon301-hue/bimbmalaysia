<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('otps', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('costumer_id');
            $table->string('code');
            $table->integer('attempts')->default(0);
            $table->boolean('verified')->default(false);
            $table->timestamp('expires_at');
            $table->timestamps();
            
            $table->foreign('costumer_id')->references('id')->on('costumers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('otps');
    }
};
