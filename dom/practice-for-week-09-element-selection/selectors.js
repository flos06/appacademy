const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seeded = document.querySelectorAll("li.seed");
    console.log(seeded)

    
    // 2. Get all seedless fruit elements
    // Your code here
    const seedless = document.querySelectorAll("li.seedless");
    console.log(seedless)
    // 3. Get first seedless fruit element
    // Your code here

    const seedl1 = document.querySelector("li.seedless")
    console.log(seedl1)

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here

    const text = document.querySelector("span");
    console.log(text)

    // 5. Get all children of element "wrapper"
    // Your code here

    const child = document.getElementById("wrapper").childNodes;
    console.log(child)

    // 6. Get all odd number list items in the list
    // Your code here
    const odd = document.querySelectorAll("li.odd");
    console.log(odd)
    // 7. Get all even number list items in the list
    // Your code here
    const even = document.getElementById("two").querySelectorAll("li:not(.odd)");
    console.log(even)
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const comp = document.getElementById("three").querySelectorAll("a:not([class])");
    console.log(comp)

    // 9. Get "Amazon" list element
    // Your code here
    const ama = document.getElementById("three").querySelectorAll("a.shopping");
    console.log(ama)

    // 10. Get all unicorn list elements (not the image element)
    // Your code here

    const uni = document.getElementById("three").querySelectorAll("li")
    console.log(uni)
}

window.onload = select;