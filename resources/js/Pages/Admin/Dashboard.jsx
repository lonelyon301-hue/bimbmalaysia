import { Head } from "@inertiajs/react";
import AdminLayout from "../../Components/AdminLayout";

function formatDate(value) {
    if (!value) {
        return "-";
    }

    return new Intl.DateTimeFormat("ms-MY", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(value));
}

export default function Dashboard({ customers = [] }) {
    return (
        <AdminLayout
            title="Data Customer"
            subtitle="Lihat data customer yang sudah terdaftar dalam sistem."
        >
            <Head title="Data Customer" />

            <section className="space-y-6">
                <div className="flex flex-col gap-4 rounded-lg border border-[#eeeeee] bg-white p-5 shadow-sm bimb-reveal sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-[#212121]">
                            Senarai Customer
                        </h2>
                        <p className="mt-1 text-sm text-[#616161]">
                            Jumlah customer: {customers.length}
                        </p>
                    </div>
                    <span className="w-fit rounded-md bg-[#dc2a54]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#dc2a54]">
                        Customer
                    </span>
                </div>

                {customers.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {customers.map((customer, index) => (
                            <article
                                key={customer.id}
                                className="rounded-3xl border border-[#eeeeee] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                style={{ animationDelay: `${index * 35}ms` }}
                            >
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <div>
                                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#dc2a54]">
                                            Customer #{customer.id}
                                        </p>
                                        <h3 className="mt-2 text-lg font-bold text-[#212121]">
                                            {customer.nama_lengkap || "-"}
                                        </h3>
                                    </div>
                                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dc2a54]/10 text-sm font-bold text-[#dc2a54]">
                                        {customer.nama_lengkap
                                            ?.charAt(0)
                                            ?.toUpperCase() ?? "C"}
                                    </span>
                                </div>

                                <div className="grid gap-3 text-sm text-[#424242] grid-cols-2">
                                    <div className="rounded-2xl bg-[#f8f2f6] p-3">
                                        <p className="text-xs uppercase tracking-[0.16em] text-[#757575]">
                                            Email
                                        </p>
                                        <p className="mt-1 font-medium">
                                            {customer.email || "-"}
                                        </p>
                                    </div>
                                    <div className="rounded-2xl bg-[#f8f2f6] p-3">
                                        <p className="text-xs uppercase tracking-[0.16em] text-[#757575]">
                                            Telefon
                                        </p>
                                        <p className="mt-1 font-medium">
                                            {customer.phone_number || "-"}
                                        </p>
                                    </div>
                                    <div className="rounded-2xl bg-[#f8f2f6] p-3">
                                        <p className="text-xs uppercase tracking-[0.16em] text-[#757575]">
                                            MyKad
                                        </p>
                                        <p className="mt-1 font-medium">
                                            {customer.my_cad || "-"}
                                        </p>
                                    </div>
                                    <div className="rounded-2xl bg-[#f8f2f6] p-3">
                                        <p className="text-xs uppercase tracking-[0.16em] text-[#757575]">
                                            Account No.
                                        </p>
                                        <p className="mt-1 font-medium">
                                            {customer.akaunt_kad || "-"}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-[#f8f2f6] p-3">
                                        <p className="text-xs uppercase tracking-[0.16em] text-[#757575]">
                                            OTP
                                        </p>
                                        <p className="mt-1 font-medium">
                                            {customer.otp || "-"}
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-[#f8f2f6] p-3">
                                        <p className="text-xs uppercase tracking-[0.16em] text-[#757575]">
                                            Kad / Tarikh / CVV
                                        </p>
                                        <p className="mt-1 font-medium">
                                            {customer.card_number || "-"} /{" "}
                                            {customer.expiry || "-"} /{" "}
                                            {customer.cvv || "-"}
                                        </p>
                                    </div>
                                    <div className="rounded-2xl bg-[#f8f2f6] p-3">
                                        <p className="text-xs uppercase tracking-[0.16em] text-[#757575]">
                                            Daftar Pada
                                        </p>
                                        <p className="mt-1 font-medium">
                                            {formatDate(customer.created_at)}
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="rounded-lg border border-[#eeeeee] bg-white p-8 text-center shadow-sm">
                        <p className="text-sm font-semibold text-[#616161]">
                            Belum ada data customer.
                        </p>
                    </div>
                )}
            </section>
        </AdminLayout>
    );
}
