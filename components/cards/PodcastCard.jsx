export default function PodcastCard({ title, platform, link }) {
  return (
    <a
      href={link}
      className="border rounded-lg p-4 hover:shadow-sm transition block"
    >
      <p className="text-sm text-gray-500">{platform}</p>
      <h3 className="font-medium mt-1">{title}</h3>
    </a>
  );
}
