<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="title" content="{{ config('app.name', 'BIMB Malaysia Rewards') }}">
        <meta name="description" content="Portal rasmi BIMB Malaysia Rewards untuk semakan pemenang, pendaftaran pelanggan dan akses ganjaran pelanggan.">
        <meta name="theme-color" content="#dc2a54">

        <meta property="og:type" content="website">
        <meta property="og:site_name" content="{{ config('app.name', 'BIMB Malaysia Rewards') }}">
        <meta property="og:title" content="{{ config('app.name', 'BIMB Malaysia Rewards') }}">
        <meta property="og:description" content="Semak status pemenang dan akses ganjaran pelanggan BIMB dengan selamat.">
        <meta property="og:url" content="{{ config('app.url') }}">
        <meta property="og:image" content="{{ asset('logo/bimb-web-768x386.png') }}">
        <meta property="og:image:alt" content="BIMB Malaysia Rewards">

        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="{{ config('app.name', 'BIMB Malaysia Rewards') }}">
        <meta name="twitter:description" content="Semak status pemenang dan akses ganjaran pelanggan BIMB dengan selamat.">
        <meta name="twitter:image" content="{{ asset('logo/bimb-web-768x386.png') }}">

        <link rel="icon" type="image/png" href="{{ asset('logo/App-Icon.png') }}">
        <link rel="apple-touch-icon" href="{{ asset('logo/App-Icon.png') }}">

        <title inertia>{{ config('app.name', 'BIMB Malaysia Rewards') }}</title>

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.jsx'])
        @inertiaHead
    </head>
    <body>
        @inertia
    </body>
</html>
