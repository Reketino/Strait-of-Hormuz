type TimelineEvent = {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: "1971",
    title: "Iran takes control",
    description: "Iran establishes control over Abu Musa and the Greater and Lesser Tunb islands, strengthening its position at the entrance to the Strait."
  },
  {
    year: "1980 1988",
    title: "The Tanker War",
    description:
      "During the Iran Iraq War, both sides attacked oil tankers and commercial shipping, making the Strait one of the world's most dangerous waterways.",
  },
  {
    year: "2011",
    title: "Threats to close Hormuz",
    description:
      "Iran repeatedly warned it could close the Strait in response to international sanctions.",
  },
  {
    year: "2019",
    title: "Tanker attacks",
    description:
      "Multiple commercial vessels were damaged in attacks near the Strait, increasing tensions between Iran and the United States.",
  },
  {
    year: "2026",
    title: "Hormuz shuts down",
    description:
      "The war transforms the Strait from a global shipping artery into a contested maritime zone. Commercial traffic is heavily disrupted, vessels are rerouted or held back, and governments and shipping companies scramble to protect energy supplies.",
  },
]

export default function TimelineSection() {
  return (
    <section className="bg-black py-40">
      <article className="mx-auto max-w-5xl px-6">
        <header className="mb-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-red-400">
            History
          </p>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">
            A timeline of
            <br />
            rising tension.
          </h2>

        </header>
      </article>
    </section>
  )
}