import { useFilter } from "../hooks/useFilter";
import "../styles/Footer.css";

export function AsideState() {
  const { filters } = useFilter();

  return (
    <aside className="aside">
      <h4>
        ⚛️ － <span> </span>
        <a
          href="https://github.com/volta2016"
          target="_blank"
          rel="noopener noreferrer"
        >
          @volta2016
        </a>
      </h4>
      <span>filters: {JSON.stringify(filters, null, 2)}</span>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </aside>
  );
}
