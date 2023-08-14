const invoiceData =  {
    orgLogo: '@/assets/Axios.png',
    orgName: "GatikAI Technologies Pvt. Ltd.",
    dueDate: '2023-01-24',
    issueDate: '2023-01-14',
    salesVoucher: 'Sales Voucher',
    invoiceNo: 1,
    accountType: 'Sales A/c',
}
const products = [
    {
        name: 'APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A',
        price: 80000,
        discount: 5000,
        serialNo: 'AHEF-2060-JINKK-202035',
        qty: 2,
        rate: 80000,
        gst: 18,
        isSelected: false,
        hsan: 123123123,

    },
    {
        name: 'HP Chromebook x360 Intel Celeron Quad Core - (4 GB/64 GB EMMC Storage/Chrome OS)',
        price: 20000,
        discount: 2000,
        serialNo: '14a-ca0504TU',
        qty: 2,
        rate: 20000,
        gst: 18,
        isSelected: false,
        hsan: 23232323
    }
]
const user = {
    name: 'Gaurav Sharma',
    phone: '+91 7777777777',
    email: 'something@abc.com',
    orgName: "GatikAI Technologies Pvt. Ltd.",
    address: '304, ARG Shoppers Opposite Indian oil petrol pump, Vidhyanagar, Jaipur, Rajasthan-302039',
    gstin: 'ZA45132GH123',
    accNo: '34562132547989',
    ifsc: 'HDFC0000123',
    upi: 'xxxxxx@okhdfc'
}
const billAddress = {
    alias: 'JPR Office',
    name: 'Divyam Technologies',
    phone: '0141  123123123',
    address: 'F35 Dwarika Tower, Vidhyanagar, Jaipur, Rajasthan-302039',
    gstin: 'ZA45132GH123'
}
const shipAddress = {
    alias: 'JPR Home',
    org: 'Trishant Kumar',
    name: 'Sulbha Sharma',
    phone: '0141  8888888888',
    address: 'A/35 Shop no 1, Murlipura, Jaipur, Rajasthan-302039',
    gstin: 'DC00132GH100'
}
module.exports = {
    invoiceData: invoiceData,
    products: products,
    user: user,
    billAddress: billAddress,
    shipAddress: shipAddress,
};