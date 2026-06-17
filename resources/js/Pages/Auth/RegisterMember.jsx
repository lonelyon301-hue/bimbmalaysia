import { Head, Link } from '@inertiajs/react';
import AuthShell from '../../Components/AuthShell';
import { Field, PrimaryButton, SelectField } from '../../Components/FormFields';

export default function RegisterMember() {
    return (
        <AuthShell
            title="Daftar Pelanggan"
            subtitle="Lengkapkan maklumat pelanggan untuk mendapatkan akses semakan ganjaran BIMB Malaysia."
        >
            <Head title="Daftar Pelanggan" />
            <form className="mt-7 space-y-5">
                <Field label="Nama Penuh" name="full_name" placeholder="Nama seperti dokumen pengenalan" autoComplete="name" />
                <Field label="Alamat Emel" type="email" name="email" placeholder="nama@email.com" autoComplete="email" />
                <Field label="Nombor Telefon" name="phone" placeholder="+60" autoComplete="tel" />
                <Field label="No. Kad Pengenalan / Passport" name="identity_number" placeholder="900101-00-0000" />
                <SelectField label="Hubungan Pelanggan" name="customer_type">
                    <option>Pilih jenis pelanggan</option>
                    <option>Pelanggan Simpanan</option>
                    <option>Pelanggan Kad</option>
                    <option>Pelanggan Pembiayaan</option>
                    <option>Pelanggan Digital</option>
                </SelectField>
                <Field label="Kata Laluan" type="password" name="password" placeholder="Cipta kata laluan" autoComplete="new-password" />
                <Field label="Sahkan Kata Laluan" type="password" name="password_confirmation" placeholder="Masukkan semula kata laluan" autoComplete="new-password" />
                <label className="flex gap-3 text-sm leading-6 text-[#616161]">
                    <input type="checkbox" name="terms" className="mt-1 h-4 w-4 rounded border-[#d8d8d8] text-[#dc2a54]" />
                    Saya mengesahkan maklumat yang diberikan adalah tepat untuk tujuan semakan ganjaran pelanggan.
                </label>
                <PrimaryButton>Daftar Akaun</PrimaryButton>
                <p className="text-center text-sm text-[#616161]">
                    Sudah mempunyai akaun?{' '}
                    <Link href="/member/login" className="font-semibold text-[#dc2a54] hover:underline">
                        Log masuk ahli
                    </Link>
                </p>
            </form>
        </AuthShell>
    );
}
