import { useState, useMemo } from 'react';
import { Calculator } from 'lucide-react';

interface MortgageCalculatorProps {
  defaultPrice?: number;
}

export default function MortgageCalculator({ defaultPrice = 1000000 }: MortgageCalculatorProps) {
  const [price, setPrice] = useState(defaultPrice);
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);

  const { monthlyPayment, loanAmount, downPaymentAmount, totalInterest } = useMemo(() => {
    const downPaymentAmount = (price * downPaymentPct) / 100;
    const loanAmount = price - downPaymentAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;

    let monthlyPayment = 0;
    if (monthlyRate > 0) {
      monthlyPayment =
        (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
        (Math.pow(1 + monthlyRate, numPayments) - 1);
    } else {
      monthlyPayment = loanAmount / numPayments;
    }

    const totalInterest = monthlyPayment * numPayments - loanAmount;

    return { monthlyPayment, loanAmount, downPaymentAmount, totalInterest };
  }, [price, downPaymentPct, interestRate, loanTerm]);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  return (
    <div className="bg-neutral-50 border border-black/10 rounded-sm p-6 space-y-6 shadow-2xl font-sans">
      <div className="flex items-center gap-2.5 border-b border-black/10 pb-3">
        <Calculator className="w-4 h-4 text-accent-red" />
        <span className="text-[10px] uppercase tracking-[0.25em] text-warm-gold font-semibold">
          Mortgage Calculator
        </span>
      </div>

      {/* Home Price */}
      <div className="space-y-2">
        <div className="flex justify-between items-baseline">
          <label className="text-[10px] uppercase tracking-widest text-brand-black/60 font-semibold">Home Price</label>
          <span className="text-sm font-mono text-brand-black font-semibold">{formatCurrency(price)}</span>
        </div>
        <input
          type="range"
          min={200000}
          max={50000000}
          step={50000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full accent-accent-red cursor-pointer"
        />
      </div>

      {/* Down Payment */}
      <div className="space-y-2">
        <div className="flex justify-between items-baseline">
          <label className="text-[10px] uppercase tracking-widest text-brand-black/60 font-semibold">
            Down Payment ({downPaymentPct}%)
          </label>
          <span className="text-sm font-mono text-brand-black font-semibold">{formatCurrency(downPaymentAmount)}</span>
        </div>
        <input
          type="range"
          min={5}
          max={80}
          step={5}
          value={downPaymentPct}
          onChange={(e) => setDownPaymentPct(Number(e.target.value))}
          className="w-full accent-accent-red cursor-pointer"
        />
      </div>

      {/* Interest Rate */}
      <div className="space-y-2">
        <div className="flex justify-between items-baseline">
          <label className="text-[10px] uppercase tracking-widest text-brand-black/60 font-semibold">Interest Rate</label>
          <span className="text-sm font-mono text-brand-black font-semibold">{interestRate.toFixed(2)}%</span>
        </div>
        <input
          type="range"
          min={2}
          max={12}
          step={0.125}
          value={interestRate}
          onChange={(e) => setInterestRate(Number(e.target.value))}
          className="w-full accent-accent-red cursor-pointer"
        />
      </div>

      {/* Loan Term */}
      <div className="space-y-2">
        <label className="text-[10px] uppercase tracking-widest text-brand-black/60 font-semibold block">Loan Term</label>
        <div className="grid grid-cols-3 gap-2">
          {[15, 20, 30].map((term) => (
            <button
              key={term}
              onClick={() => setLoanTerm(term)}
              className={`py-2 rounded-sm text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer ${
                loanTerm === term
                  ? 'bg-accent-red text-white'
                  : 'bg-white text-brand-black/70 border border-black/10 hover:border-accent-red'
              }`}
            >
              {term} Yrs
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="pt-4 border-t border-black/10 text-center space-y-1">
        <p className="text-[10px] uppercase tracking-[0.2em] text-brand-black/50 font-light">Estimated Monthly Payment</p>
        <p className="text-3xl font-serif text-accent-red font-light">{formatCurrency(monthlyPayment)}</p>
        <p className="text-[10px] text-brand-black/40 tracking-wide font-light">
          Loan amount {formatCurrency(loanAmount)} · Total interest over {loanTerm} yrs: {formatCurrency(totalInterest)}
        </p>
        <p className="text-[9px] text-brand-black/30 tracking-wide font-light pt-1">
          Estimate only. Excludes property tax, HOA, and insurance. Consult a licensed lender for exact figures.
        </p>
      </div>
    </div>
  );
}
