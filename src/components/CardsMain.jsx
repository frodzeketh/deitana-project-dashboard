import { DollarSign, CreditCard, Coins, Users } from "lucide-react"
import "../global.css"

const CardsMain = () => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-icon income">
          <DollarSign size={24} />
        </div>
        <div className="stat-info">
          <div className="stat-title">Total Income</div>
          <div className="stat-value">953,000</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon expense">
          <CreditCard size={24} />
        </div>
        <div className="stat-info">
          <div className="stat-title">Total Expense</div>
          <div className="stat-value">236,000</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon assets">
          <Coins size={24} />
        </div>
        <div className="stat-info">
          <div className="stat-title">Total Assets</div>
          <div className="stat-value">987,563</div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-icon staff">
          <Users size={24} />
        </div>
        <div className="stat-info">
          <div className="stat-title">Total Staff</div>
          <div className="stat-value">987,563</div>
        </div>
      </div>
    </div>
  )
}

export default CardsMain

