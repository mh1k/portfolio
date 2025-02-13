const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>this is dashboard</h1>
      {children}
    </div>
  );
};

export default layout;
