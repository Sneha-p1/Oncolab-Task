import { useState } from "react";
import axios from "axios";
import NavbarSidebar from "./NavbarSidebar";

const FilterTransactionsPage = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleFilter = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/transactions/filter?from=${from}&to=${to}`
      );
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching filtered transactions:", error);
    }
  };

  return (
    <NavbarSidebar>
      <div className="flex min-h-screen">
        <div className="flex-1 p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">
            Billing Statement
          </h2>

          {/* Date Inputs & Filter Button */}
          <div className="flex justify-between mb-6">
            <div className="flex">
              <h3 className="text-xl font-semibold text-blue-700">From</h3>
              <input
                type="date"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="border p-2 mr-4 rounded-lg mx-4"
              />
              <h3 className="text-xl font-semibold  text-blue-700">To</h3>

              <input
                type="date"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="border p-2 mr-4 rounded-lg mx-4"
              />
            </div>
            <button
              onClick={handleFilter}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <div
                  key={transaction._id}
                  className="border-b-2 mb-6 pb-6 p-6 bg-gray-50 rounded-lg"
                >
                  {/* Patient Details Section */}
                  <div className="border-b pb-4 mb-4">
                    <h3 className="text-2xl font-semibold mb-2 text-blue-700">
                      Patient Details
                    </h3>
                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                      <p>
                        <strong>Patient Name:</strong> {transaction.patientName}
                      </p>
                      <p>
                        <strong>Visit Date:</strong>{" "}
                        {new Date(transaction.visitDate).toLocaleDateString()}
                      </p>
                      <p>
                        <strong>Visit ID:</strong> {transaction.visitId}
                      </p>
                      <p>
                        <strong>Client:</strong> {transaction.clientName}
                      </p>
                    </div>
                  </div>

                  {/* Bill Summary Section */}
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="text-xl font-semibold mb-2 text-blue-700">
                      Bill Summary
                    </h4>
                    <table className="min-w-full border">
                      <thead>
                        <tr className="border-b bg-gray-200">
                          <th className="text-left py-2 px-4">Description</th>
                          <th className="text-right py-2 px-4">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 px-4">Amount Paid</td>
                          <td className="py-2 px-4 text-right">
                            {transaction.paidAmount.toFixed(2)}
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 px-4">Mode of Payment</td>
                          <td className="py-2 px-4 text-right">
                            {transaction.modeOfPayment}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Print/Download Buttons */}
                  <div className="flex justify-end mt-6">
                    <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition mr-4">
                      Print
                    </button>
                    <button className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition">
                      Download PDF
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 mt-6">
                No transactions found for the selected date range.
              </p>
            )}
          </div>
        </div>
      </div>
    </NavbarSidebar>
  );
};

export default FilterTransactionsPage;
