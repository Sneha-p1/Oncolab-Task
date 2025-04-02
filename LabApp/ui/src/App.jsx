import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FilterTransactionsPage from "./pages/FilterTransactionsPage";
import CreateTransactionPage from "./pages/CreateTransactionPage";
import TransactionListPage from "./pages/TransactionListPage";
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from "./pages/HomePage";
import LogIn from "./pages/LogIn";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/filter-transactions" element={<FilterTransactionsPage />} />
        <Route path="/create-transaction" element={<CreateTransactionPage />} />
        <Route path="/transaction-list" element={<TransactionListPage />} />
      </Routes>
    </Router>
  );
};

export default App;