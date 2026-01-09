export default function WritingCard({ title, link }) {
  return (
    <a
      href={link}
      className="block border-b py-4 hover:text-[#509187] transition"
    >
      <h3 className="text-base font-medium">{title}</h3>
    </a>
  );
}
