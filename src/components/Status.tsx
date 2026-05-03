import { StraitStatus } from "@/types/status";

export default function Status ({ status }: { status: StraitStatus }) {
    const color =
    status === "YES"
    ? "text-green-400"
    : status === "MAYBE"
    ? "text-yellow-400"
    : "text-red-500";

    return (
        <main className="text-center">
            <section className={`text-7xl font-extrabold ${color}`}>
                {status}
            </section>
        </main>
    );
}