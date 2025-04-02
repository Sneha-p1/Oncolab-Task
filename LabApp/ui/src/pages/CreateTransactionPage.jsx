import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavbarSidebar from "./NavbarSidebar";

const CreateTransactionPage = () => {
  const [receiptNumber, setReceiptNumber] = useState("");
  const [patientName, setPatientName] = useState("");
  const [clientName, setClientName] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [visitId, setVisitId] = useState("");
  const [grossAmount, setGrossAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [netAmount, setNetAmount] = useState("");
  const [paidAmount, setPaidAmount] = useState("");
  const [dueAmount, setDueAmount] = useState("");
  const [modeOfPayment, setModeOfPayment] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/transactions/create",
        {
          receiptNumber,
          patientName,
          clientName,
          visitDate,
          visitId,
          grossAmount,
          discount,
          netAmount,
          paidAmount,
          dueAmount,
          modeOfPayment,
        }
      );
      console.log("Transaction created:", response.data);

      setReceiptNumber("");
      setPatientName("");
      setClientName("");
      setVisitDate("");
      setVisitId("");
      setGrossAmount("");
      setDiscount("");
      setNetAmount("");
      setPaidAmount("");
      setDueAmount("");
      setModeOfPayment("");
    } catch (error) {
      console.error("Error creating transaction:", error);
    }
  };

  return (
    <NavbarSidebar>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-6 shadow-md rounded-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Create Transaction
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Receipt Number"
                  value={receiptNumber}
                  onChange={(e) => setReceiptNumber(e.target.value)}
                  className="border p-2 w-full rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="border p-2 w-full rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Client Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="border p-2 w-full rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="border p-2 w-full rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Visit ID"
                  value={visitId}
                  onChange={(e) => setVisitId(e.target.value)}
                  className="border p-2 w-full rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Gross Amount"
                  value={grossAmount}
                  onChange={(e) => setGrossAmount(e.target.value)}
                  className="border p-2 w-full rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Discount"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  className="border p-2 w-full rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Net Amount"
                  value={netAmount}
                  onChange={(e) => setNetAmount(e.target.value)}
                  className="border p-2 w-full rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Paid Amount"
                  value={paidAmount}
                  onChange={(e) => setPaidAmount(e.target.value)}
                  className="border p-2 w-full rounded-md"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Due Amount"
                  value={dueAmount}
                  onChange={(e) => setDueAmount(e.target.value)}
                  className="border p-2 w-full rounded-md"
                  required
                />
              </div>
              <div className="col-span-2">
                <select
                  value={modeOfPayment}
                  onChange={(e) => setModeOfPayment(e.target.value)}
                  className="border p-2 w-full rounded-md"
                  required
                >
                  <option value="">Select Mode of Payment</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Cash">Cash</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-300"
              >
                Create Transaction
              </button>
            </div>
          </form>
        </div>
      </div>
    </NavbarSidebar>
  );
};

export default CreateTransactionPage;
