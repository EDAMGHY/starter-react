interface IHeader {
  title: string
  subtitle?: string
}

export const Header = ({ title, subtitle }: IHeader) => {
  return (
    <div className="font-gloria space-y-4">
      <div className="border-t-2 border-primary flex justify-normal items-center w-full">
        <div className="py-1 px-5 bg-primary text-secondary">
          {title && <h2 className="text-[20px] leading-[28px]">{title}</h2>}
        </div>
      </div>
      {subtitle && <h3 className="text-[32px] leading-[42px]">{subtitle}</h3>}
    </div>
  )
}
