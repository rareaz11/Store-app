export default function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="btnMain">
      {children}
    </button>
  );
}
