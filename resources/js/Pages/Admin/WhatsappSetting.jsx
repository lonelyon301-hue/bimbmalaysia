import { Head, useForm } from "@inertiajs/react";
import AdminLayout from "../../Components/AdminLayout";
import { Field, PrimaryButton, SelectField } from "../../Components/FormFields";

export default function WhatsappSetting({ setting }) {
    const safeSetting = setting || {};
    const { data, setData, post, processing, errors } = useForm({
        channel_name: safeSetting.channel_name || "",
        nomor: safeSetting.nomor || "",
        api_key: safeSetting.api_key || "",
        send_mode: safeSetting.send_mode || "Pengeluaran",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/admin/settings/wa");
    };

    return (
        <AdminLayout
            title="Setting WhatsApp"
            subtitle="Tetapkan nombor rasmi, token sambungan dan mod penghantaran WhatsApp."
        >
            <Head title="Setting WhatsApp" />

            <div className="max-w-3xl">
                <section className="rounded-lg border border-[#eeeeee] bg-white p-6 shadow-sm bimb-reveal">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-xl font-bold text-[#212121]">
                                Sambungan WA
                            </h2>
                            <p className="mt-1 text-sm text-[#616161]">
                                Maklumat akaun dan saluran penghantaran.
                            </p>
                        </div>
                        <span className="rounded-md bg-[#dc2a54]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#dc2a54]">
                            Aktif
                        </span>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                        <Field
                            label="Nama Saluran"
                            name="channel_name"
                            placeholder="BIMB Rewards Official"
                            value={data.channel_name}
                            onChange={handleChange}
                            error={errors.channel_name}
                        />
                        <Field
                            label="Nombor WhatsApp Rasmi"
                            name="nomor"
                            placeholder="+60 12-345 6789"
                            value={data.nomor}
                            onChange={handleChange}
                            error={errors.nomor}
                        />
                        <Field
                            label="API Token"
                            name="api_key"
                            placeholder="Masukkan token sambungan"
                            value={data.api_key}
                            onChange={handleChange}
                            error={errors.api_key}
                        />
                        <SelectField
                            label="Mod Penghantaran"
                            name="send_mode"
                            value={data.send_mode}
                            onChange={handleChange}
                        >
                            <option>Pengeluaran</option>
                            <option>Ujian Dalaman</option>
                            <option>Dijeda Sementara</option>
                        </SelectField>
                        <PrimaryButton disabled={processing}>
                            Simpan Setting
                        </PrimaryButton>
                    </form>
                </section>
            </div>
        </AdminLayout>
    );
}
