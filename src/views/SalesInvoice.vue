<template>
  <div class="container sales-invoice-container">
    <div class="container inner-sales-invoice-container p-0">
      <div class="d-flex p-3 font-bold top-heading-section border-bottom">
        <div class="font-l">Create Sales Invoice</div>
        <div class="font-l">X</div>
      </div>
      <div class="account-details-section mt-2">
        <div class="d-flex text-left px-3">
          <div class="col-md-4 account-details">
            <div class="">
              Account Type
            </div>
            <div class="col-md-7">
              <select v-model="invoice.accountType">
                <option :value="invoice.accountType">{{ invoice.accountType }}</option>
              </select>
            </div>
          </div>
          <div class="col-md-5 invoice-details">
            <div class="">
              Invoice No
            </div>
            <div class="d-flex border" style="margin-right: 10px;height: 35px">
              <select class="col-md-5" v-model="invoice.salesVoucher" style="outline: none;height: 31px">
                <option :value="invoice.salesVoucher">{{ invoice.salesVoucher }}</option>
              </select>
              <div class="lg-bg col-md-2 text-center" style="padding: 4px;">INV/JPR</div>
              <input class="col-md-3 text-center" type="text" style="height: 31px" v-model="invoice.invoiceNo" />
              <div class="lg-bg col-md-2 text-center" style="padding: 4px;">/FY23</div>
            </div>
          </div>
          <div class="col-md-3 d-flex">
            <div class="col-md-6">
              <div>Issue Date</div>
              <input type="date" v-model="invoice.issueDate" @change="onDate" />
            </div>
            <div class="ol-md-6">
              <div>Due Date</div>
              <input type="date" v-model="invoice.dueDate" />
            </div>
          </div>
        </div>
        <div class="d-flex text-left px-3 mt-3 billing-details-container">
          <div class="col-md-4 billing-details">
            <div class="">
              Bill to
            </div>
            <div class="col-md-7">
              <select v-model="user.name">
                <option :value="user.name" selected>{{ user.name }}</option>
              </select>
            </div>
            <div>
              <div>{{ user.name }}</div>
              <div>{{ user.phone }}</div>
              <div>{{ user.email }}</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="">
              Billing Address
            </div>
            <div style="width:95%">
              <select class="" v-model="billAddress.alias">
                <option :value="billAddress.alias" selected>{{ billAddress.alias }}</option>
              </select>
              <div class="d-flex justify-content-between">
                <div>{{ billAddress.name }}</div>
                <div>GSTIN: {{ billAddress.gstin }}</div>
              </div>
              <div>{{ billAddress.phone }}</div>
              <div>{{ billAddress.address }}</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="">
              Shipping Address
            </div>
            <div style="width:95%">
              <select v-model="shipAddress.alias">
                <option :value="shipAddress.alias" selected>{{ shipAddress.alias }}</option>
              </select>
              <div class="d-flex justify-content-between">
                <div>{{ shipAddress.name }}</div>
                <div><u>Edit</u></div>
              </div>
              <div>{{ shipAddress.phone }}</div>
              <div>{{ shipAddress.address }}</div>
            </div>
          </div>
        </div>
        <div class="add-item-section text-left col-md-5 mt-5">
          <div class="px-3">
            <select v-model="selectedItem">
              <option value="Add Item" disabled selected hidden>Add Item</option>
              <option :value="item.name" v-for="item in products" :key="item.serialNo">{{ item.name }}</option>
            </select>
          </div>
        </div>
        <div class="items-details-container p-3">
          <div class="border-top border-bottom mt-4 mb-4">
            <div class="">
              <table style="width: 100%">
                <tr class="border-bottom">
                  <th class="col-md-1 p-3">S. No.</th>
                  <th class="col-md-3 p-3">Item</th>
                  <th class="col-md-1 p-3">Qty</th>
                  <th class="col-md-1 p-3">Rate@</th>
                  <th class="col-md-1 p-3">Discount</th>
                  <th class="col-md-1 p-3">Amount</th>
                  <th class="col-md-1 p-3">GST%</th>
                  <th class="col-md-1 p-3">Net Amount</th>
                  <th class="col-md-1 p-3"></th>
                </tr>
                <tr v-for="item in products" :key="item.serialNo">
                  <td class="col-md-1 p-3">1.</td>
                  <td class="col-md-4 p-3 text-left">
                    <div>{{ item.name }}</div>
                    <div class="border p-2">{{ item.serialNo }}</div>
                  </td>
                  <td class="col-md-1 p-3">
                    <div class="border p-2">{{ item.qty }}</div>
                  </td>
                  <td class="col-md-1 p-3">
                    <div class="border p-2">{{ $filters.numberSystem(item.rate) }}</div>
                  </td>
                  <td class="col-md-1 p-3">
                    <div class="border p-2">-{{ $filters.numberSystem(item.discount) }}</div>
                  </td>
                  <td class="col-md-1 p-3">
                    <div class="border p-2">{{ $filters.numberSystem((item.rate - item.discount) * item.qty) }}</div>
                  </td>
                  <td class="col-md-1 p-3">
                    <div style="margin-top: 24px;">
                      <select v-model="item.gst" style="height: 43.56px">
                        <option :value="item.gst" selected>{{ item.gst }}%</option>
                      </select>

                    </div>
                    <div>{{ $filters.numberSystem((item.gst / 100) * ((item.rate - item.discount) * item.qty)) }}</div>
                  </td>
                  <td class="col-md-1 p-3">
                    <div class="border p-2">{{ $filters.numberSystem((item.gst / 100) * ((item.rate - item.discount) *
                      item.qty) + (item.rate -
                        item.discount) * item.qty) }}</div>
                  </td>
                  <td><u>Edit</u></td>
                </tr>
                <tr class="border-top">
                  <th class="col-md-1 p-1"></th>
                  <th class="col-md-4 p-1"></th>
                  <th class="col-md-1 p-1">{{ totalQuantity }}</th>
                  <th class="col-md-1 p-1"></th>
                  <th class="col-md-1 p-1">-{{ $filters.numberSystem(totalDiscount) }}</th>
                  <th class="col-md-1 p-1">{{ $filters.numberSystem(totalAmount) }}</th>
                  <th class="col-md-1 p-1">{{ ($filters.numberSystem(totalGst)) }}</th>
                  <th class="col-md-1 p-1">{{ $filters.numberSystem(totalNetAmount) }}</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="terms-total-container d-flex">
          <div class="col-md-6 terms-conditions-section p-3">
            <div class="terms-condition-section text-left p-2 border">
              <div class="font-bold text-s">Terms & Conditions:</div>
              <div class="text-xs">1. Payment terms: The payment of good and services sold under this invoice is due form
                10 days from the date of invoice. Late payments
                will be subject to a 1% interest charge per month.
              </div>
              <div class="text-xs">2. Delievery: The payment of good and services sold under this invoice is due form 10
                days from the date of invoice. Late payments
                will be subject to a 1% interest charge per month. the buyers assumes responsibility</div>
            </div>
            <div class="notes-condition-section text-left p-2 border mt-2">
              <div class="font-bold text-s">Notes:</div>
              <div class="text-xs">1. Payment terms: The payment of good and services sold under this invoice is due form
                10 days from the date of invoice. Late payments
                will be subject to a 1% interest charge per month.
              </div>
              <div class="text-xs">2. Delievery: The payment of good and services sold under this invoice is due form 10
                days from the date of invoice. Late payments
                will be subject to a 1% interest charge per month. the buyers assumes responsibility</div>
            </div>
          </div>
          <div class="col-md-6 p-3 grand-total-section d-flex">
            <div class="col-md-6" style="height:100%">
              <div class="col-md-7 border p-2 m-auto font-bold" style="margin-top: 200px !important">
                <div>CGST: {{ $filters.numberSystem(totalGst / 2) }} </div>
                <div>SGST: {{ $filters.numberSystem(totalGst / 2) }}</div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="d-flex">
                <div class="px-2 col-md-6">Extra Discount</div>
                <div class="border px-2 col-md-6">-{{ $filters.numberSystem(extraCharge) }}</div>
              </div>
              <div class="d-flex mt-3">
                <div class="px-2 col-md-6">Delievery Charges</div>
                <div class="border px-2 col-md-6">{{ $filters.numberSystem(delieveryCharge) }}</div>
              </div>
              <div class="d-flex mt-3">
                <div class="px-2 col-md-6">Round off</div>
                <div class="border px-2 col-md-6">0.{{ roundOff }}</div>
              </div>
              <div class="d-flex mt-3">
                <div class="px-2 col-md-6"></div>
                <div class="border col-md-6">
                  <select v-model="addOtherAccount" style="width: 100%;border: 0">
                    <option :value="addOtherAccount">{{ addOtherAccount }}</option>
                  </select>
                </div>
              </div>
              <div class="d-flex mt-3 font-bold">
                <div class="px-2 col-md-6 font-xl">Grand Total</div>
                <div class="px-2 col-md-6 font-xl">&#8377; {{ $filters.numberSystem(grandTotal) }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-section border-top px-3 py-4 d-flex">
          <div class="col-md-7 d-flex justify-content-between">
            <div class="font-l"><span class="font-bold font-l">Total Qty:</span>{{ totalQuantity }}</div>
            <div class="font-l"><span class="font-bold font-l">Total Discount:</span>-{{
              $filters.numberSystem(totalDiscount) }}</div>
            <div class="font-l"><span class="font-bold font-l">Total tax:</span>{{ $filters.numberSystem(totalGst) }}
            </div>
            <div class="font-l"><u class="font-l" style="text-decoration: underline black 4px"><span
                  class="font-bold font-l">Grand Total:</span>&#8377; {{ $filters.numberSystem(grandTotal) }}</u></div>
          </div>
          <div class="col-md-5 d-flex justify-content-around">
            <button type="button" class="btn btn-danger btn-lg">CANCEL</button>
            <button type="button" class="btn btn-outline-primary btn-lg">DISCARD</button>
            <button type="button" class="btn btn-primary btn-lg" @click="showInvoices()">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      selectedItem: 'Add Item',
      extraCharge: 635.25,
      delieveryCharge: 1200.21,
      addOtherAccount: 'Add Other Accounts'
    }
  },
  provide() {
    return {
      invoice: this.salesInvoiceData
    }
  },
  methods: {
    showInvoices() {
      localStorage.setItem("salesInvoiceData", JSON.stringify(this.salesInvoiceData));
      this.$router.push({ path: '/invoiceList' })
    }
  },
  computed: {
    ...mapGetters({
      data: 'getInvoiceData'
    }),
    invoice() {
      return this.data.invoiceData
    },
    user() {
      return this.data.user
    },
    billAddress() {
      return this.data.billAddress
    },
    shipAddress() {
      return this.data.shipAddress
    },
    products() {
      return this.data.products
    },
    totalQuantity() {
      var total = 0;
      this.products.forEach(item => {
        total += item.qty
      })
      return total;
    },
    totalDiscount() {
      var total = 0;
      this.products.forEach(item => {
        total += item.discount
      })
      return total;
    },
    totalAmount() {
      var total = 0;
      this.products.forEach(item => {
        total += item.qty * (item.rate - item.discount)
      })
      return total;
    },
    totalGst() {
      var total = 0;
      this.products.forEach(item => {
        total += (item.gst / 100) * ((item.rate - item.discount) * item.qty)
      })
      return total;
    },
    totalNetAmount() {
      var total = 0;
      this.products.forEach(item => {
        total += (item.gst / 100) * ((item.rate - item.discount) * item.qty) + (item.qty * (item.rate - item.discount))
      })
      return total;
    },
    grandTotal() {
      return Math.round(this.totalNetAmount - this.extraCharge + this.delieveryCharge);
    },
    roundOff() {
      return (this.totalNetAmount - this.extraCharge + this.delieveryCharge).toString().split(".")[1];
    },
    salesInvoiceData() {
      var data = {
        invoice: this.invoice,
        user: this.user,
        billAddress: this.billAddress,
        shipAddress: this.shipAddress,
        products: this.products,
        selectedItem: this.selectedItem,
        extraCharge: this.extraCharge,
        delieveryCharge: this.delieveryCharge,
        addOtherAccount: this.addOtherAccount,
        totalQuantity: this.totalQuantity,
        totalDiscount: this.totalDiscount,
        totalAmount: this.totalAmount,
        totalGst: this.totalGst,
        totalNetAmount: this.totalNetAmount,
        grandTotal: this.grandTotal,
        roundOff: this.roundOff,
      }
      return data;
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-invoice-container {
  .inner-sales-invoice-container {
    justify-content: center;
    border: 2px solid black;
    border-radius: 10px;

    .top-heading-section {
      justify-content: space-between;
    }

    .account-details-section {
      .account-details {
        select {
          width: 100%;
        }
      }

      .invoice-details {

        input,
        select {
          border: 0px solid white;
        }
      }

      .billing-details-container {
        select {
          width: 100%;
        }
      }

      .add-item-section {
        select {
          width: 100%;
        }
      }

      .items-details-container {
        padding-bottom: 0 !important;
      }
    }
  }
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.border-bottom {
  border-bottom: 2px solid black;
}

.border-right {
  border-right: 2px solid black;
}

.border-left {
  border-left: 2px solid black;
}

.font-bold {
  font-weight: bold;
}

.font-xl {
  font-size: 22px;
}

.font-2xl {
  font-size: 24px;
}

.height-50 {
  height: 50px;
}

.mr-8 {
  margin-right: 8rem;
}

.lg-bg {
  background: lightgray;
}

.text-s {
  font-size: 16px;
}

.text-m {
  font-size: 18px;
}

.text-xs {
  font-size: 14px;
}

* {
  font-size: 16px;
}

.font-l {
  font-size: 20px;
}

select,
input {
  height: 35px;
  border: 2px solid black;
  background: white;
}</style>