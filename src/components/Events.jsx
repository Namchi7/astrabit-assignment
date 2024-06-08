function Events() {
  return (
    <div className="flex flex-col justify-start items-start divide-y-[1px] divide-solid divide-[#E0E1E3] bg-white rounded-[5px] shadow-finance-item">
      <div className="w-full flex flex-col justify-start items-start gap-4 p-[25px]">
        <h3 className="text-[#1A1B1E] text-[16px] font-bold">Video KYC</h3>

        <div className="w-full flex flex-row justify-start items-start gap-5">
          <div className="flex flex-col justify-start items-start gap-0">
            <p className="text-[12px] text-[#1A1B1E] opacity-60">
              Scheduled On
            </p>
            <div className="w-full px-4 py-0 bg-[#1a1b1e0d] text-[40px] text-[#1A1B1E] font-bold">
              28
            </div>
            <div className="w-full text-center text-[12px] text-white font-medium bg-[#CE5151] py-[3px]">
              Oct, 2023
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-4">
            <p className="text-[#1A1B1E] text-[14px] font-bold">
              Utkarsh SF Bank FD Plan 2
            </p>

            <div className="w-full flex flex-row justify-between items-start gap-1">
              <div className="flex flex-col justify-start items-center">
                <p className="text-[14px] text-[#1A1B1E] opacity-60">
                  Deposit Amount
                </p>
                <p className="text-[14px] text-[#1A1B1E] font-bold">
                  Rs. 20,000
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <p className="text-[14px] text-[#1A1B1E] opacity-60">Tenure</p>
                <p className="text-[14px] text-[#1A1B1E] font-bold">2 Years</p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <p className="text-[14px] text-[#1A1B1E] opacity-60">
                  Interest Rate
                </p>
                <p className="text-[14px] text-[#1A1B1E] font-bold">9.10%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-[1fr_1fr] gap-3">
          <button className="p-3 text-[1rem] text-white font-medium rounded-[5px] border-2 border-solid border-[#3B39D9] bg-[#3B39D9]">
            Complete Now
          </button>
          <button className="p-3 text-[1rem] text-[#3B39D9] font-medium rounded-[5px] border-2 border-solid border-[#3B39D9] bg-white">
            Reschedule
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col justify-start items-start gap-4 p-[25px]">
        <h3 className="text-[#1A1B1E] text-[16px] font-bold">
          Pending Payment
        </h3>

        <div className="w-full flex flex-row justify-start items-start gap-5">
          <div className="flex flex-col justify-start items-start gap-0">
            <p className="text-[12px] text-[#1A1B1E] opacity-60">Pay By</p>
            <div className="w-full px-4 py-0 bg-[#1a1b1e0d] text-[40px] text-[#1A1B1E] font-bold">
              30
            </div>
            <div className="w-full text-center text-[12px] text-white font-medium bg-[#CE5151] py-[3px]">
              Oct, 2023
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-4">
            <p className="text-[#1A1B1E] text-[14px] font-bold">
              Bajaj Finserv Corp FD 1
            </p>

            <div className="w-full flex flex-row justify-between items-start gap-1">
              <div className="flex flex-col justify-start items-center">
                <p className="text-[14px] text-[#1A1B1E] opacity-60">
                  Deposit Amount
                </p>
                <p className="text-[14px] text-[#1A1B1E] font-bold">
                  Rs. 25,000
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <p className="text-[14px] text-[#1A1B1E] opacity-60">Tenure</p>
                <p className="text-[14px] text-[#1A1B1E] font-bold">
                  18 Months
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <p className="text-[14px] text-[#1A1B1E] opacity-60">
                  Interest Rate
                </p>
                <p className="text-[14px] text-[#1A1B1E] font-bold">8.10%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-[1fr_1fr] gap-3">
          <button className="p-3 text-[1rem] text-white font-medium rounded-[5px] border-2 border-solid border-[#3B39D9] bg-[#3B39D9]">
            Pay Now
          </button>
          <button className="p-3 text-[1rem] text-[#3B39D9] font-medium rounded-[5px] border-2 border-solid border-[#3B39D9] bg-white">
            Cancel Application
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col justify-start items-start gap-4 p-[25px]">
        <h3 className="text-[#1A1B1E] text-[16px] font-bold">
          Upcoming FD Maturity
        </h3>

        <div className="w-full flex flex-row justify-start items-start gap-5">
          <div className="flex flex-col justify-start items-start gap-0">
            <p className="text-[12px] text-[#1A1B1E] opacity-60">Renew by</p>
            <div className="w-full px-4 py-0 bg-[#1a1b1e0d] text-[40px] text-[#1A1B1E] font-bold">
              30
            </div>
            <div className="w-full text-center text-[12px] text-white font-medium bg-[#CE5151] py-[3px]">
              Oct, 2023
            </div>
          </div>

          <div className="w-full flex flex-col justify-start items-start gap-4">
            <p className="text-[#1A1B1E] text-[14px] font-bold">
              Shriram Finance Corp FD 1
            </p>

            <div className="w-full flex flex-row justify-between items-start gap-1">
              <div className="flex flex-col justify-start items-center">
                <p className="text-[14px] text-[#1A1B1E] opacity-60">
                  Deposit Amount
                </p>
                <p className="text-[14px] text-[#1A1B1E] font-bold">
                  Rs. 25,000
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <p className="text-[14px] text-[#1A1B1E] opacity-60">Tenure</p>
                <p className="text-[14px] text-[#1A1B1E] font-bold">
                  18 Months
                </p>
              </div>
              <div className="flex flex-col justify-start items-center">
                <p className="text-[14px] text-[#1A1B1E] opacity-60">
                  Interest Rate
                </p>
                <p className="text-[14px] text-[#1A1B1E] font-bold">8.10%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-[1fr_1fr] gap-3">
          <button className="p-3 text-[1rem] text-white font-medium rounded-[5px] border-2 border-solid border-[#3B39D9] bg-[#3B39D9]">
            Renew Now
          </button>
          <button className="p-3 text-[1rem] text-[#3B39D9] font-medium rounded-[5px] border-2 border-solid border-[#3B39D9] bg-white">
            Compare Other FDs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;
