import { Head, useForm } from '@inertiajs/react';
import AuthShell from '../../Components/AuthShell';
import { Field, PrimaryButton } from '../../Components/FormFields';

export default function AdminLogin() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (event) => {
        event.preventDefault();
        post('/admin/login');
    };

    return (
        <AuthShell
            title="Log Masuk Admin"
            subtitle="Masukkan kelayakan pentadbir untuk mengakses pengurusan ganjaran dan semakan pemenang."
            variant="admin"
        >
            <Head title="Log Masuk Admin" />
            <form onSubmit={submit} className="mt-7 space-y-5">
                <Field
                    label="Alamat Emel Admin"
                    type="email"
                    name="email"
                    placeholder="admin@bankislam.com.my"
                    autoComplete="email"
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
                        Kekalkan sesi
                    </label>
                    <a href="#" className="font-semibold text-[#dc2a54] hover:underline">Lupa kata laluan?</a>
                </div>
                <PrimaryButton disabled={processing}>{processing ? 'Memproses...' : 'Log Masuk Admin'}</PrimaryButton>
            </form>
        </AuthShell>
    );
}
