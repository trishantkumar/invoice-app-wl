<template>
  <RouterLink to="/">All Invoices</RouterLink>
  <div class="text-right download-button container">
    <button type="button" class="btn btn-primary btn-lg" @click="downloadInvoice()">Download Invoice</button>
  </div>
  <div class="container invoice-container" id="printable">
    <div class="row inner-invoice-container">
      <div class="col-lg-12 inner-invoice-section">
        <div class="invoice-heading-section d-flex">
          <div class="sub-heading-1">
            <h2>TAX INVOICE</h2>
          </div>
          <div class="sub-heading-2">
            <div>
              <h4>Original Copy</h4>
            </div>
            <div>
              <h6>This is computer generated invoice.</h6>
            </div>
          </div>
        </div>
        <div class="invoice-top-section card">
          <div class="card-body border-bottom d-flex">
            <div class="col-md-6 text-left border-right">
              <div class="p-4">
                <div class="firm-image mb-4"><img src="@/assets/Axios.png" /></div>
                <div class="font-bold font-2xl">{{ invoice.user.orgName }}</div>
                <div class="mb-3">{{ invoice.user.phone }}</div>
                <div class="mb-3">{{ invoice.user.address }}</div>
                <div class="font-bold font-2xl">GSTIN: {{ invoice.user.gstin }}</div>
              </div>
            </div>
            <div class="col-md-6 text-left">
              <div class="d-flex border-bottom">
                <div class="border-right col-md-6 p-2">
                  <div class="">Invoice No</div>
                  <div class="font-bold font-xl">INP/JPR/{{ invoice.invoice.invoiceNo }}/FY2023</div>
                </div>
                <div class=" col-md-6 p-2">
                  <div class="">Issue Date</div>
                  <div class="font-bold font-xl">{{ invoice.invoice.issueDate }}</div>
                </div>
              </div>
              <div class="d-flex border-bottom">
                <div class="border-right col-md-6 p-2">
                  <div class="">Total Amount</div>
                  <div class="font-bold font-xl">{{ invoice.grandTotal }}</div>
                </div>
                <div class=" col-md-6 p-2">
                  <div class="">Due Date</div>
                  <div class="font-bold font-xl">{{ invoice.invoice.dueDate }}</div>
                </div>
              </div>
              <div class="d-flex border-bottom">
                <div class="border-right col-md-6 p-2">
                  <div class="">Invoice No</div>
                  <div class="font-bold font-xl">INP/JPR/FY2023</div>
                </div>
                <div class=" col-md-6 p-2">
                  <div class="">Invoice No</div>
                  <div class="font-bold font-xl">INP/JPR/FY2023</div>
                </div>
              </div>
              <div class="d-flex border-bottom">
                <div class="border-right col-md-6 p-2">
                  <div class="">Invoice No</div>
                  <div class="font-bold font-xl">INP/JPR/FY2023</div>
                </div>
                <div class=" col-md-6 p-2">
                  <div class="">Invoice No</div>
                  <div class="font-bold font-xl">INP/JPR/FY2023</div>
                </div>
              </div>
              <div class="d-flex">
                <div class="border-right col-md-6 p-2">
                  <div class="">Dispatch through</div>
                  <div class="font-bold">Bluedart</div>
                </div>
                <div class=" col-md-6 p-2">
                  <div class="">Ebill way ref:</div>
                  <div class="font-bold font-xl"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body border-bottom">
            <div class="d-flex text-left">
              <div class="billing-address-section col-md-6 p-3">
                <div><u>Billing Address</u></div>
                <div class="">
                  <div class="font-bold font-2xl">{{ invoice.user.name }}</div>
                  <div class="font-bold font-2xl">{{ invoice.billAddress.name }}</div>
                  <div class="mb-3">{{ invoice.billAddress.phone }}</div>
                  <div class="mb-3">{{ invoice.billAddress.address }}</div>
                  <div class="font-bold font-2xl">GSTIN: {{ invoice.billAddress.gstin }}</div>
                </div>
              </div>
              <div class="col-md-6 py-3">
                <div class="shipping-address-section px-3">
                  <div><u>Shipping Address</u></div>
                  <div class="">
                    <div class="font-bold font-2xl">{{ invoice.user.org }}</div>
                    <div class="mb-3">{{ invoice.shipAddress.phone }}</div>
                    <div class="mb-3">
                      {{ invoice.shipAddress.address }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="inventory-products-section">
              <table class="">
                <tr class="border-bottom">
                  <th class="border-right" style="width: 4%">S. No.</th>
                  <th class="border-right" style="width: 28%">Item</th>
                  <th class="border-right" style="width: 7%">Qty</th>
                  <th class="border-right" style="width: 15%">Rate@</th>
                  <th class="border-right" style="width: 16%">Amount</th>
                  <th class="border-right" style="width: 9%">Discount</th>
                  <th class="border-right" style="width: 5%">GST</th>
                  <th class="" style="width: 16%">Net Amount</th>
                </tr>
                <tr class="text-m border-bottom" v-for="(item, i) in invoice.products" :key="i">
                  <td class="border-right" style="width: 4%">{{ i + 1 }}.</td>
                  <td class="border-right text-left p-2" style="width: 28%">
                    <div>{{ item.name }}</div>
                    <div><b>HSN</b>>{{ item.hsn }}</div>
                  </td>
                  <td class="border-right" style="width: 7%">{{ item.qty }}pcs</td>
                  <td class="border-right" style="width: 15%">{{ $filters.numberSystem(item.rate) }}</td>
                  <td class="border-right" style="width: 16%">{{ $filters.numberSystem(item.rate * item.qty) }}</td>
                  <td class="border-right" style="width: 9%">-{{ $filters.numberSystem(item.discount) }}</td>
                  <td class="border-right" style="width: 5%">{{ item.gst }}%</td>
                  <td class="" style="width: 16%">{{ $filters.numberSystem((item.gst / 100) * ((item.rate - item.discount)
                    * item.qty) + (item.rate -
                      item.discount) * item.qty) }}</td>
                </tr>
                <tr class="">
                  <th class="" style="width: 4%"></th>
                  <th class="border-right p-2" style="width: 28%">Total</th>
                  <th class="border-right p-2" style="width: 7%">{{ invoice.totalQuantity }}pcs</th>
                  <th class="border-right p-2" style="width: 15%"></th>
                  <th class="border-right p-2" style="width: 16%">{{ $filters.numberSystem(totalAmountWithoutCharges) }}
                  </th>
                  <th class="border-right p-2" style="width: 9%">{{ $filters.numberSystem(invoice.totalDiscount) }}</th>
                  <th class="border-right p-2" style="width: 5%"></th>
                  <th class=" p-2" style="width: 16%">{{ $filters.numberSystem(invoice.totalNetAmount) }}</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <!-- Amount Section -->
        <div class="card-body inventory-amount-container">
          <div class="inventory-amount-section">
            <div class="products-header d-flex border-bottom">
              <div class="font-xl p-2 col-md-6 text-left">
                <div style="margin-top: 33px">Amount chargeable in words:</div>
                <div class="font-bold">{{ $filters.convertInWords(invoice.grandTotal) }}</div>
              </div>
              <div class="font-xl col-md-4 border-right d-flex">
                <div class="col-md-5 p-2">
                </div>
                <div class="col-md-7">
                  <div class="px-2">Extra Discount</div>
                  <div class="px-2">Delievery Charges</div>
                  <div class="px-2">Round off</div>
                  <div class="font-bold lg-bg">
                    <div class="p-2">Ground Total</div>
                  </div>
                </div>
              </div>
              <div class="font-xl col-md-2">
                <div class="px-2">-{{ $filters.numberSystem(invoice.extraCharge) }}</div>
                <div class="px-2">{{ $filters.numberSystem(invoice.delieveryCharge) }}</div>
                <div class="px-2">0.{{ invoice.roundOff }}</div>
                <div class="font-bold lg-bg">
                  <div class="p-2">&#8377; {{ $filters.numberSystem(invoice.grandTotal) }}</div>
                </div>
              </div>
            </div>
            <div class="inventory-amount-header d-flex border-bottom">
              <div class=" font-xl p-2 col-md-3 border-right">HSAN/SC</div>
              <div class=" font-xl p-2 col-md-3 border-right text-left">Taxable Amount</div>
              <div class=" font-xl col-md-4 border-right d-flex">
                <div class="col-md-6 border-right">
                  <div class="border-bottom p-2">CGST</div>
                  <div class="d-flex">
                    <div class="col-md-5 p-2 border-right">Rate</div>
                    <div class="col-md-7 p-2">Amount</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="border-bottom p-2">SGST</div>
                  <div class="d-flex">
                    <div class="col-md-5 p-2 border-right">Rate</div>
                    <div class="col-md-7 p-2">Amount</div>
                  </div>
                </div>
              </div>
              <div class=" font-xl p-2 col-md-2">Total Tax Amount</div>
            </div>
            <div class="inventory-amount-1 d-flex border-bottom" v-for="item in invoice.products" :key="item.serialNo">
              <div class="font-xl p-2 col-md-3 border-right">{{ item.hsan }}</div>
              <div class="font-xl p-2 col-md-3 border-right">{{ $filters.numberSystem((item.rate - item.discount) * item.qty)
              }}</div>
              <div class="font-xl col-md-4 border-right d-flex">
                <div class="col-md-6 border-right">
                  <div class="d-flex">
                    <div class="col-md-5 p-2 border-right">{{ item.gst / 2 }}%</div>
                    <div class="col-md-7 p-2">{{ $filters.numberSystem(item.gst / (2 * 100) * (item.rate
                      - item.discount) * item.qty) }}</div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex">
                    <div class="col-md-5 p-2 border-right">{{ $filters.numberSystem(item.gst / 2) }}%</div>
                    <div class="col-md-7 p-2">{{ $filters.numberSystem(item.gst / (2 * 100) * (item.rate
                      - item.discount) * item.qty) }}</div>
                  </div>
                </div>
              </div>
              <div class=" font-xl p-2 col-md-2">{{ $filters.numberSystem(item.gst / 100 * (item.rate
                - item.discount) * item.qty) }}</div>
            </div>
            <div class="inventory-amount-total d-flex">
              <div class="font-bold font-xl p-2 col-md-3 border-right">Total</div>
              <div class=" font-xl p-2 col-md-3 border-right">{{ $filters.numberSystem(totalTaxableAmount) }}</div>
              <div class=" font-xl col-md-4 border-right d-flex">
                <div class="col-md-6 border-right">
                  <div class="p-2">{{ $filters.numberSystem(totalCgstSgstAmount) }}</div>
                </div>
                <div class="col-md-6">
                  <div class="p-2">{{ $filters.numberSystem(totalCgstSgstAmount) }}</div>
                </div>
              </div>
              <div class="p-2 col-md-2">{{ $filters.numberSystem(totalGstAmount) }}</div>
            </div>
          </div>
        </div>
        <!-- Terms & Conditions -->
        <div class="terms-condition-section text-left py-2">
          <div class="font-bold text-s">Terms & Conditions:</div>
          <div class="text-xs">1. Payment terms: The payment of good and services sold under this invoice is due form 10
            days from the date of invoice. Late payments
            will be subject to a 1% interest charge per month.
          </div>
          <div class="text-xs">2. Delievery: The payment of good and services sold under this invoice is due form 10 days
            from the date of invoice. Late payments
            will be subject to a 1% interest charge per month. the buyers assumes responsibility</div>
        </div>
        <!-- Invoice bottom section  -->
        <div class="bottom-section d-flex">
          <div class="bank-details col-md-4 text-m text-left">
            <div class="font-bold">
              Bank Details:
            </div>
            <div>{{ invoice.user.orgName }}</div>
            <div>{{ invoice.user.address }}</div>
            <div>Acc No. - {{ invoice.user.accNo }}</div>
            <div>IFSC - {{ invoice.user.ifsc }}</div>
            <div>UPI - {{ invoice.user.upi }}</div>
          </div>
          <div class="qr-code col-md-2"><img src="@/assets/QR1.jpg" /></div>
          <div class="signature-box-container col-md-6 p-2 text-right">
            <div class="signature-box">
              <div>for {{ invoice.user.orgName }}</div>
              <div class="authorised-sign">Authorised signatory</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";
export default {
  name: "InvoiceTwo",
  data() {
    return {
      invoice: JSON.parse(localStorage.getItem('salesInvoiceData'))
    }
  },
  computed: {
    totalAmountWithoutCharges() {
      var total = 0;
      this.invoice.products.forEach(item => {
        total += item.rate * item.qty
      })
      return total;
    },
    totalTaxableAmount() {
      var total = 0;
      this.invoice.products.forEach(item => {
        total += (item.rate - item.discount) * item.qty
      })
      return total;
    },
    totalCgstSgstAmount() {
      var total = 0;
      this.invoice.products.forEach(item => {
        total += item.gst / (2 * 100) * (item.rate - item.discount) * item.qty
      })
      return total;
    },
    totalGstAmount() {
      var total = 0;
      this.invoice.products.forEach(item => {
        total += item.gst / 100 * (item.rate - item.discount) * item.qty
      })
      return total;
    },
  },
  methods: {
    downloadInvoice() {
      html2pdf()
        .set({
          margin: 1,
          filename: "invoice-2.pdf",
          html2canvas: {
            logging: false,
            dpi: 192,
            letterRendering: true,
            useCORS: true,
            allowTaint: true,
          },
          jsPDF: {
            orientation: "portrait",
            unit: "cm",
            format: [55, 35],
          },
        })
        .from(document.getElementById("printable"))
        .save();
    },
  }
}
</script>

<style lang="scss" scoped>
.download-button {
  padding: 0 4rem;
}

.invoice-container {
  .inner-invoice-container {
    justify-content: center;

    .inventory-amount-container {
      border: 2px solid black;
      border-top: 0;
    }

    .inner-invoice-section {
      padding: 4rem;

      .invoice-heading-section {
        justify-content: space-between;

        h2,
        h4 {
          font-weight: bold;
        }

        h6 {
          font-weight: 400;
        }

        .sub-heading-1 {
          padding-top: 17px;
        }

        .sub-heading-2 {
          text-align: right;
        }
      }

      .card {
        border: 2px solid black;
        border-radius: 0;

        .card-body {
          padding: 0;

          .firm-image {
            img {
              width: 300px;
            }
          }

          .shipping-address-section {
            height: 100%;
            border-left: 4px dashed lightgrey;
          }
        }
      }

      .bottom-section {
        .bank-details {
          margin-top: 50px;
        }

        .qr-code {
          img {
            width: 200px;
          }
        }

        .signature-box-container {
          padding-left: 15px !important;

          .signature-box {
            border: 2px solid black;
            margin-top: 50px;
            height: calc(100% - 50px);
            position: relative;

            .authorised-sign {
              position: absolute;
              bottom: 0;
              right: 0;
            }
          }
        }
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
  border-bottom: 2px solid black !important;
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
}</style>
