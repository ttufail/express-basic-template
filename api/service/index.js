const MongoClient = require("mongodb").MongoClient;

const uri = "" // add your own mongo URI
const client = new MongoClient(uri, { useNewUrlParser: true });
const addStudent = async (req, res) => {
  const data = [
    {
      id: 127802,
      parent_id: 0,
      number: "127802",
      order_key: "wc_order_5r62weHHeWOoc",
      created_via: "checkout",
      version: "3.9.5",
      status: "processing",
      currency: "RON",
      date_created: "2023-04-16T20:03:25",
      date_created_gmt: "2023-04-16T20:03:25",
      date_modified: "2023-04-16T20:03:25",
      date_modified_gmt: "2023-04-16T20:03:25",
      discount_total: "66.40",
      discount_tax: "0.00",
      shipping_total: "0.00",
      shipping_tax: "0.00",
      cart_tax: "0.00",
      total: "597.60",
      total_tax: "0.00",
      prices_include_tax: true,
      customer_id: 0,
      customer_ip_address: "82.77.240.174",
      customer_user_agent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1",
      customer_note: "",
      billing: {
        first_name: "Andrada",
        last_name: "Dascal",
        company: "",
        address_1: "Str. Florilor Nr 36",
        address_2: "",
        city: "Sarmașu",
        state: "MS",
        postcode: "547515",
        country: "RO",
        email: "dascalandrada35@gmail.com",
        phone: "0749516911",
      },
      shipping: {
        first_name: "Andrada",
        last_name: "Dascal",
        company: "",
        address_1: "Str. Florilor Nr 36",
        address_2: "",
        city: "Sarmașu",
        state: "MS",
        postcode: "547515",
        country: "RO",
      },
      payment_method: "cod",
      payment_method_title: "Numerar la livrare",
      transaction_id: "",
      date_paid: null,
      date_paid_gmt: null,
      date_completed: null,
      date_completed_gmt: null,
      cart_hash: "c4cf4968412d031544ac093beb8f4266",
      meta_data: [
        {
          id: 784978,
          key: "_billing_cif",
          value: "",
        },
        {
          id: 784979,
          key: "is_vat_exempt",
          value: "no",
        },
        {
          id: 784980,
          key: "_aepc_session_user_id",
          value: "3f790df5e7f10ac1c8da4b423bbaba12",
        },
        {
          id: 784986,
          key: "_ga_tracked",
          value: "1",
        },
        {
          id: 784987,
          key: "_aepc_puchase_tracked",
          value: "1",
        },
      ],
      line_items: [
        {
          id: 20878,
          name: "Masuta de toaleta Hollywood - Alb",
          product_id: 67206,
          variation_id: 0,
          quantity: 1,
          tax_class: "",
          subtotal: "664.00",
          subtotal_tax: "0.00",
          total: "597.60",
          total_tax: "0.00",
          taxes: [],
          meta_data: [],
          sku: "",
          price: 597.6,
        },
      ],
      tax_lines: [],
      shipping_lines: [
        {
          id: 20879,
          method_title: "Livrare gratuită",
          method_id: "free_shipping",
          instance_id: "4",
          total: "0.00",
          total_tax: "0.00",
          taxes: [],
          meta_data: [
            {
              id: 152661,
              key: "Elemente",
              value: "Masuta de toaleta Hollywood - Alb &times; 1",
            },
          ],
        },
      ],
      fee_lines: [],
      coupon_lines: [
        {
          id: 20880,
          code: "minus10",
          discount: "66.4",
          discount_tax: "0",
          meta_data: [
            {
              id: 152664,
              key: "coupon_data",
              value: {
                id: 99315,
                code: "minus10",
                amount: "10",
                date_created: {
                  date: "2022-06-02 06:55:12.000000",
                  timezone_type: 1,
                  timezone: "+00:00",
                },
                date_modified: {
                  date: "2023-02-28 14:21:52.000000",
                  timezone_type: 1,
                  timezone: "+00:00",
                },
                date_expires: {
                  date: "2023-04-30 00:00:00.000000",
                  timezone_type: 1,
                  timezone: "+00:00",
                },
                discount_type: "percent",
                description: "10% sale comenzi pe site",
                usage_count: 606,
                individual_use: false,
                product_ids: [],
                excluded_product_ids: [],
                usage_limit: 0,
                usage_limit_per_user: 0,
                limit_usage_to_x_items: null,
                free_shipping: false,
                product_categories: [],
                excluded_product_categories: [],
                exclude_sale_items: false,
                minimum_amount: "",
                maximum_amount: "",
                email_restrictions: [],
                virtual: false,
                meta_data: [],
              },
            },
          ],
        },
      ],
      refunds: [],
      currency_symbol: "lei",
      _links: {
        self: [
          {
            href: "https://nomi.ro/wp-json/wc/v3/orders/127802",
          },
        ],
        collection: [
          {
            href: "https://nomi.ro/wp-json/wc/v3/orders",
          },
        ],
      },
    },
    {
      id: 127792,
      parent_id: 0,
      number: "127792",
      order_key: "wc_order_rAt1KWghSfC8R",
      created_via: "checkout",
      version: "3.9.5",
      status: "processing",
      currency: "RON",
      date_created: "2023-04-16T17:20:51",
      date_created_gmt: "2023-04-16T17:20:51",
      date_modified: "2023-04-16T17:20:51",
      date_modified_gmt: "2023-04-16T17:20:51",
      discount_total: "52.70",
      discount_tax: "0.00",
      shipping_total: "0.00",
      shipping_tax: "0.00",
      cart_tax: "0.00",
      total: "474.30",
      total_tax: "0.00",
      prices_include_tax: true,
      customer_id: 0,
      customer_ip_address: "5.14.6.136",
      customer_user_agent:
        "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Mobile/15E148 Safari/604.1",
      customer_note: "",
      billing: {
        first_name: "Yener",
        last_name: "Sachir",
        company: "SC OSCAR CREATIVE SRL",
        address_1: "Sos mangaliei nr 9",
        address_2: "",
        city: "Constanta",
        state: "CT",
        postcode: "900131",
        country: "RO",
        email: "jacksbarbershop88@gmail.com",
        phone: "0736994769",
      },
      shipping: {
        first_name: "Yener",
        last_name: "Sachir",
        company: "",
        address_1: "Timisanei nr 60",
        address_2: "",
        city: "Constanta",
        state: "CT",
        postcode: "900572",
        country: "RO",
      },
      payment_method: "cod",
      payment_method_title: "Numerar la livrare",
      transaction_id: "",
      date_paid: null,
      date_paid_gmt: null,
      date_completed: null,
      date_completed_gmt: null,
      cart_hash: "a5022ebf78c9332ec11c20f45769e6d7",
      meta_data: [
        {
          id: 784880,
          key: "_billing_cif",
          value: "40440167",
        },
        {
          id: 784881,
          key: "is_vat_exempt",
          value: "no",
        },
        {
          id: 784882,
          key: "billing_cif",
          value: "40440167",
        },
        {
          id: 784883,
          key: "_aepc_session_user_id",
          value: "bbf6a7956ad8a2a68103136047bf7f0d",
        },
        {
          id: 784889,
          key: "_ga_tracked",
          value: "1",
        },
        {
          id: 784890,
          key: "_aepc_puchase_tracked",
          value: "1",
        },
      ],
      line_items: [
        {
          id: 20871,
          name: "Scaun de bar tapitat H-103 Gri",
          product_id: 63941,
          variation_id: 0,
          quantity: 1,
          tax_class: "",
          subtotal: "527.00",
          subtotal_tax: "0.00",
          total: "474.30",
          total_tax: "0.00",
          taxes: [],
          meta_data: [],
          sku: "",
          price: 474.3,
        },
      ],
      tax_lines: [],
      shipping_lines: [
        {
          id: 20872,
          method_title: "Livrare gratuită",
          method_id: "free_shipping",
          instance_id: "4",
          total: "0.00",
          total_tax: "0.00",
          taxes: [],
          meta_data: [
            {
              id: 152618,
              key: "Elemente",
              value: "Scaun de bar tapitat H-103 Gri &times; 1",
            },
          ],
        },
      ],
      fee_lines: [],
      coupon_lines: [
        {
          id: 20873,
          code: "minus10",
          discount: "52.7",
          discount_tax: "0",
          meta_data: [
            {
              id: 152621,
              key: "coupon_data",
              value: {
                id: 99315,
                code: "minus10",
                amount: "10",
                date_created: {
                  date: "2022-06-02 06:55:12.000000",
                  timezone_type: 1,
                  timezone: "+00:00",
                },
                date_modified: {
                  date: "2023-02-28 14:21:52.000000",
                  timezone_type: 1,
                  timezone: "+00:00",
                },
                date_expires: {
                  date: "2023-04-30 00:00:00.000000",
                  timezone_type: 1,
                  timezone: "+00:00",
                },
                discount_type: "percent",
                description: "10% sale comenzi pe site",
                usage_count: 604,
                individual_use: false,
                product_ids: [],
                excluded_product_ids: [],
                usage_limit: 0,
                usage_limit_per_user: 0,
                limit_usage_to_x_items: null,
                free_shipping: false,
                product_categories: [],
                excluded_product_categories: [],
                exclude_sale_items: false,
                minimum_amount: "",
                maximum_amount: "",
                email_restrictions: [],
                virtual: false,
                meta_data: [],
              },
            },
          ],
        },
      ],
      refunds: [],
      currency_symbol: "lei",
      _links: {
        self: [
          {
            href: "https://nomi.ro/wp-json/wc/v3/orders/127792",
          },
        ],
        collection: [
          {
            href: "https://nomi.ro/wp-json/wc/v3/orders",
          },
        ],
      },
    },
  ];
  try {
    await client.connect();
    const database = client.db("test");
    const collection = database.collection("mymodels");
    const result = await collection.insertMany(data);
    console.log(`${result.insertedCount} students inserted.`);
    res.send("Students inserted successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error inserting students.");
  } finally {
    await client.close();
  }
};

module.exports = { addStudent };
