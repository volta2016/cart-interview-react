import "../styles/Footer.css";

export function Footer({ filters }) {
  // const { filters } = useFilters()

  return (
    <footer className="footer">
      <h4>
        ⚛️ － <span>@volta2016</span>
      </h4>
      <span>filters: {JSON.stringify(filters, null, 2)}</span>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  );
}
