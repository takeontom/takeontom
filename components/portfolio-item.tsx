interface PortfolioItemProps {
  name: string;
  imagePath: string;
  children: React.ReactNode;
}

export default function PortfolioItem(portfolio: PortfolioItemProps) {
  return (
    <div>
      <h3>{portfolio.name}</h3>
      {portfolio.children}
    </div>
  );
}
