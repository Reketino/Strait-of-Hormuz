type Event = {
    title: string;
    url: string;
};

export default function Events({ 
    events,
    updatedAt
}: { 
    events: Event[]; 
    updatedAt: string;
}) {
    return (
        <section className="max-w-xl w-full mt-8">
            <header className="flex items-center justify-between mb-2 text-xs text-gray-400">
            <span>News</span>
             <span>Updated: {new Date(updatedAt).toLocaleTimeString()}</span>
            </header>

            <ul className="
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl
            overflow-hidden
            ">
            {events.map((event, i) => (
                <a
                key={i}
                href={event.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                group flex items-start gap-3
                p-3
                hover:bg-white/10
                transition
                "
                >
                

                    <span className="text-xs text-gray-400 w-4 mt-1">
                        {i + 1}
                    </span>

                    <span className="
                    flex-1 text-sm text-gray-200
                    group-hover:text-white
                    leading-relaxed
                    ">
                    {event.title}
                    </span>
                    <p className="
                    text-gray-500
                    opacity-0 group-hover:opacity-100
                    transition transform group-hover:translate-x-1
                    "
                    >
                     →
                    </p>
                </a>
            ))}
            </ul>
            </section>
    );
}