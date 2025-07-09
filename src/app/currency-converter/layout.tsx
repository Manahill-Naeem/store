// src/app/currency-converter/layout.tsx
export const metadata = {
  title: 'Currency Converter - Mobile Store',
  description: 'Convert prices between different currencies instantly.',
};

export default function CurrencyConverterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}