type ImpactCardProps = {
  label: string;
  value: string;
  description: string;
};

const impacts: ImpactCardProps[] = [
  {
    label: "Strait status",
    value: "CLOSED",
    description: "Commercial shipping through the Strait of Hormuz has been severely disrupted by the conflict."
  },
  {
    label: "Global energy",
    value: "20%",
    description:
    "Tankers and other commercial vessels face delays, rerouting and increased risk."
  }
]