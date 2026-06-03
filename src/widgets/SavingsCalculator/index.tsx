'use client';

import { FC, useState, useMemo } from 'react';
import SectionOpacity from '@/components/ui/SectionOpacity';
import SectionHeader from '@/components/ui/SectionHeader';
import { AnimatedSection } from '@/components/AnimatedSection';
import { DollarSign, TrendingDown, Calculator, Sparkles } from 'lucide-react';

interface Props {}

const SavingsCalculator: FC<Props> = () => {
  const [localStaffCount, setLocalStaffCount] = useState<number>(1);
  const [avgLocalSalary, setAvgLocalSalary] = useState<number>(60000);
  const [vaCount, setVaCount] = useState<number>(1);

  const avgVASalary = 18000;

  const calculations = useMemo(() => {
    const localCost = localStaffCount * avgLocalSalary;
    const vaCost = vaCount * avgVASalary;
    const totalSavings = localCost - vaCost;
    const savingsPercentage = localCost > 0 ? ((totalSavings / localCost) * 100) : 0;

    return {
      localCost,
      vaCost,
      totalSavings,
      savingsPercentage,
      monthlySavings: totalSavings / 12,
    };
  }, [localStaffCount, avgLocalSalary, vaCount]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section 
      id="calculator" 
      className="border-t border-gray-1-light dark:border-gray-1 bg-gradient-to-b from-bg-2-light to-bg-1-light dark:from-bg-2 dark:to-bg-1 py-[6vw] md:py-[4vw] z-0"
    >
      <SectionOpacity classes='z-2'>
        <div className="container mx-auto px-[12vw] md:px-[4vw] max-w-[1400px]">
          <SectionHeader
            title="CALCULATE YOUR SAVINGS"
            description="See how much you can save by hiring skilled Virtual Assistants from the Philippines. Adjust the numbers below to match your needs."
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Input Section */}
            <AnimatedSection delay={0.1}>
              <div className="bg-card rounded-xl p-8 border border-border card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-light/10 dark:bg-primary/10 text-primary-light dark:text-primary">
                    <Calculator size={20} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-secondary">Your Current Setup</h3>
                </div>

                <div className="space-y-6">
                  {/* Local Staff Count */}
                  <div>
                    <label className="block text-sm font-medium text-text-1-light dark:text-text-1 mb-2">
                      Number of Local Staff
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={localStaffCount}
                      onChange={(e) => setLocalStaffCount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-1-light dark:bg-gray-1 rounded-lg appearance-none cursor-pointer accent-primary-light dark:accent-primary"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">1</span>
                      <span className="text-lg font-bold text-primary-light dark:text-primary">{localStaffCount}</span>
                      <span className="text-sm text-muted-foreground">20</span>
                    </div>
                  </div>

                  {/* Average Local Salary */}
                  <div>
                    <label className="block text-sm font-medium text-text-1-light dark:text-text-1 mb-2">
                      Average Annual Salary (Local Staff)
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                      <input
                        type="number"
                        min="20000"
                        max="200000"
                        step="5000"
                        value={avgLocalSalary}
                        onChange={(e) => setAvgLocalSalary(Number(e.target.value))}
                        className="w-full pl-10 pr-4 py-3 bg-bg-1-light dark:bg-bg-1 border border-gray-1-light dark:border-gray-1 rounded-lg text-text-1-light dark:text-text-1 focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* VA Count */}
                  <div>
                    <label className="block text-sm font-medium text-text-1-light dark:text-text-1 mb-2">
                      Number of VAs to Hire
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={vaCount}
                      onChange={(e) => setVaCount(Number(e.target.value))}
                      className="w-full h-2 bg-gray-1-light dark:bg-gray-1 rounded-lg appearance-none cursor-pointer accent-primary-light dark:accent-primary"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm text-muted-foreground">1</span>
                      <span className="text-lg font-bold text-primary-light dark:text-primary">{vaCount}</span>
                      <span className="text-sm text-muted-foreground">20</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-1-light dark:border-gray-1">
                    <p className="text-sm text-muted-foreground">
                      Average VA Salary: <span className="font-semibold text-text-1-light dark:text-text-1">{formatCurrency(avgVASalary)}/year</span>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Results Section */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-primary-light/10 to-primary/5 dark:from-primary/10 dark:to-primary/5 rounded-xl p-8 border border-primary-light/20 dark:border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-light dark:bg-primary text-white">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-secondary">Your Potential Savings</h3>
                </div>

                <div className="space-y-6">
                  {/* Annual Costs Comparison */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card/50 rounded-lg p-4 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">Local Staff Cost</p>
                      <p className="text-xl font-bold text-text-1-light dark:text-text-1">
                        {formatCurrency(calculations.localCost)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">per year</p>
                    </div>
                    <div className="bg-card/50 rounded-lg p-4 border border-border">
                      <p className="text-xs text-muted-foreground mb-1">VA Cost</p>
                      <p className="text-xl font-bold text-primary-light dark:text-primary">
                        {formatCurrency(calculations.vaCost)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">per year</p>
                    </div>
                  </div>

                  {/* Total Savings */}
                  <div className="bg-card rounded-lg p-6 border-2 border-primary-light dark:border-primary">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingDown className="text-green-500" size={24} />
                      <p className="text-sm font-medium text-muted-foreground">Total Annual Savings</p>
                    </div>
                    <p className="text-4xl font-bold text-green-500 mb-1">
                      {formatCurrency(calculations.totalSavings)}
                    </p>
                    <p className="text-lg font-semibold text-primary-light dark:text-primary">
                      Save {calculations.savingsPercentage.toFixed(0)}% annually
                    </p>
                  </div>

                  {/* Monthly Breakdown */}
                  <div className="bg-card/50 rounded-lg p-4 border border-border">
                    <p className="text-sm text-muted-foreground mb-2">Monthly Savings</p>
                    <p className="text-2xl font-bold text-text-1-light dark:text-text-1">
                      {formatCurrency(calculations.monthlySavings)}
                    </p>
                  </div>

                  {/* Call to Action */}
                  <div className="pt-4">
                    <p className="text-sm text-center text-muted-foreground">
                      Ready to start saving? <a href="#contact" className="text-primary-light dark:text-primary font-semibold hover:underline">Get in touch</a>
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Additional Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            <AnimatedSection delay={0.3}>
              <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-green-500/10 text-green-500 mb-4">
                  <DollarSign size={24} />
                </div>
                <h4 className="font-display font-bold text-lg text-secondary mb-2">Cost-Effective</h4>
                <p className="text-sm text-muted-foreground">
                  Save up to 70% on staffing costs without compromising quality
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 mb-4">
                  <Sparkles size={24} />
                </div>
                <h4 className="font-display font-bold text-lg text-secondary mb-2">Skilled Talent</h4>
                <p className="text-sm text-muted-foreground">
                  Access highly skilled professionals from the Philippines
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-card rounded-xl p-6 border border-border card-hover text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 text-purple-500 mb-4">
                  <TrendingDown size={24} />
                </div>
                <h4 className="font-display font-bold text-lg text-secondary mb-2">Scalable Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Scale your team up or down based on your business needs
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </SectionOpacity>
    </section>
  );
};

export default SavingsCalculator;
