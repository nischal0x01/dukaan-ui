export const RevenueCard = ({
    title,
    orderCount,
    amount }) => {
    return <div className="bg-whitek rounded shadow-md p-4 hover:bg-slate-200">
        <div className="flex">
            <div className="text-gray-600">{title}</div>
            <div className="pl-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
            </div>
        </div>

        <div className="flex justify-between pt-2">
            <div className="font-semibold text-2xl">
                $ {amount}
            </div>
            {orderCount ? <div className="flex text-blue-500 cursor-pointer underline font-medium flex flex-col justify-center" >
                <div className="pr-2 flex">
                    <div>
                        {orderCount} order(s)</div>
                    <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </div> : null}
        </div>
    </div>

}