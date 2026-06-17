import { Head, Link, useForm } from '@inertiajs/react';
import AuthShell from '../../Components/AuthShell';
import { Field, PrimaryButton } from '../../Components/FormFields';

export default function MemberLogin() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (event) => {
        event.preventDefault();
        post('/member/login');
    };

    return (
        <AuthShell
            title="Log Masuk Ahli"
            subtitle="Akses akaun pelanggan untuk menyemak status ganjaran, maklumat kempen, dan arahan tuntutan."
        >
            <Head title="Log Masuk Ahli" />
            <form onSubmit={submit} className="mt-7 space-y-5">
                <Field
                    label="Alamat Emel Pelanggan"
                    type="email"
                    name="email"
                    placeholder="Masukkan emel pelanggan"
                    autoComplete="username"
                    value={data.email}
                    onChange={(event) => setData('email', event.target.value)}
                    error={errors.email}
                />
                <Field
                    label="Kata Laluan"
                    type="password"
                    name="password"
                    placeholder="Masukkan kata laluan"
                    autoComplete="current-password"
                    value={data.password}
                    onChange={(event) => setData('password', event.target.value)}
                    error={errors.password}
                />
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-[#616161]">
                        <input
                            type="checkbox"
                            name="remember"
                            checked={data.remember}
                            onChange={(event) => setData('remember', event.target.checked)}
                            className="h-4 w-4 rounded border-[#d8d8d8] text-[#dc2a54]"
                        />
                        Ingat saya
                    </label>
                    <a href="#" className="font-semibold text-[#dc2a54] hover:underline">Bantuan akses</a>
                </div>
                <PrimaryButton disabled={processing}>{processing ? 'Memproses...' : 'Log Masuk'}</PrimaryButton>
                <p className="text-center text-sm text-[#616161]">
                    Belum mempunyai akaun?{' '}
                    <Link href="/member/register" className="font-semibold text-[#dc2a54] hover:underline">
                        Daftar pelanggan
                    </Link>
                </p>
            </form>
        </AuthShell>
    );
}
