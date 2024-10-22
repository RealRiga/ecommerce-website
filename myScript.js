//Overriding bootstrap styling
function setActiveLink() {
    var ids = ["index", "products", "faqs", "about_us", "contact_us"];
    console.log(document.URL);
    const url = document.URL;
    for (const i of ids) {
      if (url.toLowerCase().includes(i)) {
        document.getElementById(i).classList.add("selected");
      } else {
        document.getElementById(i).classList.add("unselected");
      }
    }
}

//Adding the ids to make the pages active
function addIds() {
    var ids = ["index", "products", "faqs", "about_us", "contact_us"];
    var info = document.getElementsByClassName("nav-link")
    console.log(document.getElementsByClassName("nav-link"))
    for (var i = 0; i < info.length; i++) {
        var element = info.item(i);
        element.id = ids[i]
    }
    console.log(document.getElementsByClassName("nav-link"))
}

addIds();
setActiveLink()


// Profile Section
function myAccount() {
  let modal = document.getElementById("profile-button")
  if (modal.classList.contains("not-visible")) {
      modal.classList.add("visible")
      modal.classList.remove("not-visible")
  } else {
      modal.classList.add("not-visible")
      modal.classList.remove("visible")
  }

};

function seedData() {
  var db = [
    {
      id: "1",
      discount: null,
      images: [
        "../images/tfan4.jpg",
        "../images/pfan4.jpg",
        "../images/tfan.png"
      ],
      price: "$560",
      name: "Table fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "2",
      discount: null,
      images: [
        "../images/towerfan3.jpg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$1560",
      name: "Tower fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "3",
      discount: null,
      images: [
        "../images/sfan4.jpg",
        "../images/pfan3.png",
        "../images/sfan3.png"
      ],
      price: "$760",
      name: "Standing fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "4",
      discount: null,
      images: [
        "../images/pfan7.webp",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$60",
      name: "Personal fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "5",
      discount: null,
      images: [
        "../images/tfan5.webp",
        "../images/tfan.png",
        "../images/sfan3.png"
      ],
      price: "$150",
      name: "Table fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "6",
      discount: null,
      images: [
        "../images/towerfan4.webp",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$900",
      name: "Tower fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "7",
      discount: null,
      images: [
        "../images/pfan3.png",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$154",
      name: "Portable fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "8",
      discount: null,
      images: [
        "../images/towerfan.png",
        "../images/tfan.png",
        "../images/sfan3.png"
      ],
      price: "$239.99",
      name: "Tower fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "9",
      discount: null,
      images: [
        "../images/tfan6.jpg",
        "../images/pfan4.jpg",
        "../images/tfan.png"
      ],
      price: "$190",
      name: "Table fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "10",
      discount: null,
      images: [
        "../images/cfan4.jpg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "54.99",
      name: "Ceiling fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "11",
      discount: null,
      images: [
        "../images/pfan6.jpg",
        "../images/pfan3.png",
        "../images/sfan3.png"
      ],
      price: "$634.99",
      name: "Portable fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "12",
      discount: null,
      images: [
        "../images/tfan8.jpg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$97.99",
      name: "Table fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "13",
      discount: null,
      images: [
        "../images/tfan7.jpg",
        "../images/tfan.png",
        "../images/sfan3.png"
      ],
      price: "$44.99",
      name: "Table fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "14",
      discount: null,
      images: [
        "../images/pfan5.jpg",
        "../images/pfan4.jpg",
        "../images/tfan.png"
      ],
      price: "$90.99",
      name: "Portable fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "15",
      discount: null,
      images: [
        "../images/cfan.jpeg",
        "../images/pfan4.jpg",
        "../images/tfan.png"
      ],
      price: "$54.99",
      name: "Ceiling fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "16",
      discount: null,
      images: [
        "../images/cfan2.jpeg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$239.99",
      name: "Ceiling fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "17",
      discount: null,
      images: [
        "../images/cfan3.jpg",
        "../images/pfan3.png",
        "../images/sfan3.png"
      ],
      price: "$54.99",
      name: "Ceiling fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "18",
      discount: null,
      images: [
        "../images/cfan5.jpg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$354.99",
      name: "Ceiling fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "19",
      discount: null,
      images: [
        "../images/cfan6.jpg",
        "../images/tfan.png",
        "../images/sfan3.png"
      ],
      price: "$239.99",
      name: "Ceiling fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "20",
      discount: null,
      images: [
        "../images/cfan7.jpg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$54.99",
      name: "Ceiling fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "21",
      discount: null,
      images: [
        "../images/cfan8.jpg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$401.99",
      name: "Ceiling fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "22",
      discount: null,
      images: [
        "../images/PFan.png",
        "../images/tfan.png",
        "../images/sfan3.png"
      ],
      price: "$54.99",
      name: "Personal fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "23",
      discount: null,
      images: [
        "../images/pfan2.png",
        "../images/pfan4.jpg",
        "../images/tfan.png"
      ],
      price: "$239.99",
      name: "Table fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "24",
      discount: null,
      images: [
        "../images/pfan4.jpg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "124.99",
      name: "Personal fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "25",
      discount: null,
      images: [
        "../images/pfan5.jpg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$239.99",
      name: "Personal fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "26",
      discount: null,
      images: [
        "../images/pfan8.jpg",
        "../images/pfan3.png",
        "../images/sfan3.png"
      ],
      price: "$780",
      name: "Personal fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "27",
      discount: null,
      images: [
        "../images/sfan.jpg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$354.99",
      name: "Standing fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "28",
      discount: null,
      images: [
        "../images/sfan2.png",
        "../images/tfan.png",
        "../images/sfan3.png"
      ],
      price: "$239.99",
      name: "Standing fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "29",
      discount: null,
      images: [
        "../images/sfan3.png",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$54.99",
      name: "Standing fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "30",
      discount: null,
      images: [
        "../images/sfan5.jpg",
        "../images/pfan3.png",
        "../images/sfan3.png"
      ],
      price: "$224.99",
      name: "Standing fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "31",
      discount: null,
      images: [
        "../images/sfan6.jpg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$97.99",
      name: "Standing Fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "32",
      discount: null,
      images: [
        "../images/sfan7.jpg",
        "../images/tfan.png",
        "../images/sfan3.png"
      ],
      price: "$44.99",
      name: "Standing fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "33",
      discount: null,
      images: [
        "../images/sfan8.jpg",
        "../images/pfan4.jpg",
        "../images/tfan.png"
      ],
      price: "$90.99",
      name: "Standing fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "34",
      discount: null,
      images: [
        "../images/tfan.png",
        "../images/pfan4.jpg",
        "../images/tfan.png"
      ],
      price: "$54.99",
      name: "Table fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "35",
      discount: null,
      images: [
        "../images/tfan2.png",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$239.99",
      name: "Table fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "36",
      discount: null,
      images: [
        "../images/tfan3.png",
        "../images/pfan3.png",
        "../images/sfan3.png"
      ],
      price: "$254.99",
      name: "Table fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "37",
      discount: null,
      images: [
        "../images/towerfan2.png",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$354.99",
      name: "Tower fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "38",
      discount: null,
      images: [
        "../images/towerfan9.jpg",
        "../images/tfan.png",
        "../images/sfan3.png"
      ],
      price: "$239.99",
      name: "Tower fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "39",
      discount: null,
      images: [
        "../images/towerfan6.jpg",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$54.99",
      name: "Tower fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "40",
      discount: null,
      images: [
        "../images/towerfan7.webp",
        "../images/tfan7.jpg",
        "../images/towerfan9.jpg",

      ],
      price: "$400.99",
      name: "Tower fan",
      description: "Best and most suitable personal fan",
    },
    {
      id: "41",
      discount: null,
      images: [
        "../images/towerfan8.jpg",
        "../images/pfan3.png",
        "../images/sfan3.png"
      ],
      price: "$224.99",
      name: "Tower fan",
      description: "Best and most suitable personal fan",
    },
  ]
  localStorage.setItem("db", JSON.stringify(db))
}

seedData();

function getFromDatabase(id) {
  let db = JSON.parse(localStorage.getItem("db"));
  let product = db.filter((e) => e.id === id);
  if (product) {
    console.log(product)
    document.getElementById("title").innerHTML = product[0].name
    document.getElementById("description").innerHTML = product[0].description
    document.getElementById("price").innerHTML = product[0].price
    document.getElementById("main_product_image").src = product[0].images[0]
    for (var i of product[0].images) {
      var li = document.createElement("li")
      li.innerHTML = `<img onclick="changeImage(this)" src="${i}" width="70">`
      document.getElementById("thumbnail").appendChild(li)
    }
  }
  console.log("Product", product)
}

function setProduct() {
  let uri = new URL(document.location.href)
  let id = uri.searchParams.get("productId");
  console.log("Id", id)
  if (id != null) {
    getFromDatabase(id);
  }
}

setProduct()



// Product page
function changeImage(element) {
  var main_prodcut_image = document.getElementById('main_product_image');
  main_prodcut_image.src = element.src;
}