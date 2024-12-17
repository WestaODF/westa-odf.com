// JavaScript to toggle the menu on mobile view
function toggleMenu() {
    const navLinks = document.querySelector('.nav ul');
    navLinks.style.display = (navLinks.style.display === 'flex') ? 'none' : 'flex';
}

// Function to load different content sections
function loadContent(section) {
    const mainContent = document.getElementById('main-content');

    if (section === 'history') {
        mainContent.innerHTML = ` <h2 class="first-h1">History of West Africa Orphanage Development Foundation(WESTA-ODF)</h2>
        <h2>Early Beginnings</h2>
        <p>Christiana Aderonke was born in a small village in Nigeria, where her family was well-known for their charitable work. Growing up, she witnessed firsthand the difficulties faced by children without families—children who lived on the streets, scavenged for food, and had little hope for their futures. Christiana's parents were local teachers and often took in children who had nowhere to go, offering them a temporary place to stay. The kindness and resilience of these children left a lasting impression on young Christiana.</p>
        <p>At the age of 18, Christiana moved to Lagos to pursue her studies in social work. During her university years, she became increasingly aware of the widespread poverty and lack of resources that many orphaned children in Nigeria faced. She was particularly moved by a visit to a local orphanage that was severely underfunded, where she saw children living in overcrowded conditions and often going without adequate food or education. This experience ignited a passion within her to help change the fate of children in need.</p>

        <h2>The Birth of WESTA-ODF</h2>
        <p>After graduating with a degree in social work, Christiana returned to her village with a dream. She wanted to create a foundation that would not only provide shelter to orphaned children but would also support their education, emotional development, and transition into adulthood.</p>
       <p>In 2020, Christiana founded the West African Orphanage Development Foundation (WESTA-ODF), initially operating out of a small rented building in Lagos. Her vision for the foundation was simple but ambitious: to provide a safe and nurturing environment for orphaned children and to help them become self-sufficient, educated individuals who could contribute meaningfully to society.</p>
       <p>With limited resources, Christiana relied on donations from friends, local businesses, and other concerned individuals who shared her vision. She started by taking in a handful of children who had nowhere else to go. These first few children were the foundation's core group, and they became not only the faces of WESTA-ODF but also the driving force behind Christiana's dedication. She named the foundation "WESTA-ODF" to reflect her belief in the power of unity and progress across the West African region.</p>
   <section class="see-more"><h2>Growth and Expansion</h2>
           <p>As the years passed, WESTA-ODF began to grow. Word spread of the foundation's work, and more and more children were brought in from the streets, from hospitals, and from other orphanages that lacked sufficient resources. Christiana tirelessly worked to secure funding, navigating the complexities of running a charity in a region with limited resources and a government that was often unable to provide adequate support.</p>
           <p>In 2022, WESTA-ODF received its first large international donation—a grant from an NGO based in Europe that was impressed by Christiana's passion and the foundation's work. With these funds, WESTA-ODF was able to expand its facilities and hire more staff, including trained educators, psychologists, and medical professionals, to help care for the children. Christiana also began to partner with local schools, ensuring that the children of WESTA-ODF received quality education, which was often out of reach for children living in poverty.
           </p>
           <p>During this period, WESTA-ODF developed a mentorship program, which paired older children with mentors who had successfully transitioned into adulthood. These mentors helped guide the younger children, offering them hope for a future beyond the walls of the orphanage.</p>
           <h2>A New Vision: Empowering Through Education</h2>
           <p>By 2023, Christiana had a clear vision for the future of WESTA-ODF: empowerment through education. She understood that in order for these children to break the cycle of poverty, they needed to be equipped with more than just shelter and food—they needed opportunities for growth, leadership, and personal development.</p>
           <p>With this in mind, WESTA-ODF began offering vocational training programs in addition to academic education. This allowed older children who might not have been able to attend university to learn valuable trades, such as carpentry, sewing, technology, and catering. Christiana believed that providing these skills would enable them to be self-sufficient and eventually return to their communities as leaders and role models.</p>
           <p>At the same time, Christiana advocated for social reform, pushing for better child welfare policies in Nigeria and other West African countries. Through partnerships with local governments, she helped push for the creation of legal frameworks that would better protect orphaned children and ensure they had access to education, healthcare, and shelter.</p>

           <h2>Challenges and Triumphs</h2>
           <p>The road to success was not easy. Christiana and her team faced numerous challenges, from inadequate funding to political instability, and the increasing demand for resources often stretched the foundation's capabilities. There were times when they struggled to feed the children or provide medical care. But Christiana remained determined, constantly looking for creative ways to raise funds and form partnerships with other organizations.</p>
           <p>One of the most defining moments in the history of WESTA-ODF came in 2023, when the foundation launched its "Adopt a Child" program. This program allowed people from around the world to sponsor individual children, providing them with the financial support needed to continue their education and stay at the foundation. The program was a huge success, helping WESTA-ODF become financially self-sustaining and reach even more children.</p>
            
           <h2>The Future of WESTA-ODF</h2>
           <p>Today, WESTA-ODF has expanded beyond Nigeria, with branches in West African countries like Ghana and Côte d'Ivoire even though it is yet to reach to all the West African Countries. The foundation now provides shelter, education, vocational training, and psychological support to over 2,000 children across the region. Christiana's vision has grown into a movement that advocates for children's rights and empowers youth across West Africa to thrive.</p>
           <p>As for Christiana, she remains an inspiration—a woman who, starting with little more than a vision and a deep sense of compassion, has changed the lives of thousands. Her work is a testament to the power of education, empathy, and the belief that every child deserves the opportunity to have a better future.</p>
           <p>"When we invest in children, we invest in the future," Christiana Aderonke often says. And indeed, through WESTA-ODF, she has created a legacy that will endure for generations.</p>
           
       </section>
           
        `;
    } else if (section === 'payment') {
        mainContent.innerHTML = `
        <section class="payment">
            <h2 class="payment-h1">PAYMENT SECTION</h2>
             <p>We believe you are making this payment out of you free will for those children who do not have anyone to look after them. We will appreciate even a penny of yours.</p>
             <p>Before you make a payment, we will advice you to fill our form with the necessary informations so that your will appear in our benefactor's section below. If you don't want your information to appear on our website then, leave the form empty. Endeavour to also send the same information to the founder on instagram through her email so that we will know who is who. This information will appear at most, a day after it has been submitted. Notify us on instagram if you have not seen yours.</p>
             <p>Due to the fraud we experienced last year we have minimized our online payment platform until we have developed a better security safegaurding our website. Also our Official email was taken away from us. We will try to make changes as soon as we can for your convenience. Please bear with us for the mean time. For now payment will be made to the fund raising account provided by our founder on <a href="https://www.instagram.com/christiana_westaodf/" class="ig-link">instagram</a>.
            this link will take you straight to her account to avoid you from being scammed by fraudsters  who claim to be who they are not. If any change is made we will notify your on instagram.</p>
            <p>Please note that you can only submit you informaton once so make sure to check them if they are correct. If you don't want to fill the form as mentioned earlier leave the form empty and don't submit anything. Just proceed with the payment. Notify on us instagram through the founder if you want the amount you donated written then notify us through the founder. PLESASE NOTE that all communications are to be done through email. The founder's email will be on the instagram page. Click the link above to take you to the founder directly.</p>
            <fieldset>
                <legend>FORM</legend>
             <form class="form">
                    <label  for="surname">Surname:</label>
                    <input  type="text" id="surname" name="surname" placeholder="your surname" required spellcheck="false"><br>
                
                    <label for="firstname">Firstname:</label>
                    <input  type="text" name="firstname" id="firstname" placeholder="your firstname" required spellcheck="false"><br>
                
                     <label  for="image">Upolad your image </label>
                     <input class="choose-file" type="file" id="image" name="image" required><br>
                     <img class="loader" src="/Images/Spinner@1x-1.1s-200px-200px.svg" alt="submitting..." width="100" height="200" >
                     <h5 class="success">FORM SUBMITTED!!! <br> Your information is being processed,you can now proceed with payment.</h5>
                <div class="disabled"><button class="btn"onclick="addResponsiveness" type="submit">Submit</button></div>
             </form>
            </fieldset>
        </section>
        `;
    } else if (section === 'benefactors') {
        mainContent.innerHTML = `
        <section class = "benefactor"
            <h2>BENEFACTORS</h2>
            <p>Our generous benefactors who help make this mission possible. We will never forget what you have done for us</p>
            <div class="image-section">
        <div class = "image-holder">
            <img width = "100" height="100" src="/Images/TY-Danjuma.jpg" alt="Chibike Emamanuel A.">
            <p> Chibike Emamanuel</p>
        </div class = "image-holder">
        <p class = "divider"></p>
        <div class = "image-holder">
            <img width = "100" height="100" src="/Images/Harry-foundation.jpg" alt="Harry foundation">
            <p>Harry Foundation</p>
        </div class = "image-holder">
          <p class = "divider"></p>
         <div class="image-holder">
        <img src="/Images/Agarwal Aarushi.jpg" alt="Agarwal Aarushi" width="100" height="100">
        <p>Agarwal Aarushi</p>
     </div>
 <p class = "divider"></p>
     
     <div class="image-holder">
        <img src="/Images/Favour Abi.jpg" alt="Favour Abi" width="100" height="100">
        <p>Favour Abi</p>
     </div>
      <p class = "divider"></p>
     <div class="image-holder">
        <img src="/Images/Elizabeth Davis.jpg" alt="Elizabeth Davis" width="100" height="100">
        <p>Elizabeth Davis</p>
     </div>
      <p class = "divider"></p>
     <div class="image-holder">
        <img src="/Images/Mia Jones.jpg" alt="Mia Jones" width="100" height="100">
        <p>Mia Jones</p>
     </div>
      <p class = "divider"></p>
     <div class="image-holder">
        <img src="/Images/Samson Gonzalez.jpg" alt="Samson Gonzalez" width="100" height="100">
        <p>Samson Gonzalez</p>
     </div>
      <p class = "divider"></p>
     <div class="image-holder">
        <img src="/Images/Amelia Johnson.jpg" alt="Amelia Johnson" width="100" height="100">
        <p>Amelia Johnson</p>
     </div>
      <p class = "divider"></p>
     <div class="image-holder">
        <img src="/Images/Emily Williams.jpg" alt="Emily Williams" width="100" height="100">
        <p>Emily Williams</p>
     </div>
 <p class = "divider"></p>
     <div class="image-holder">
        <img src="/Images/Gloria Odu.jpg" alt="Gloria Odu" width="100" height="100">
        <p>Gloria Odu</p>
     </div>
 <p class = "divider"></p>
     <div class="image-holder">
        <img src="/Images/James Andreson.jpg" alt="James Andreson" width="100" height="100">
        <p>James Andreson</p>
     </div>

           <div class="end">
               <h3>Our prayer for our benefactors</h3>
               <p>Lord bless and reward those who help us in the task of feeding the poor, and grant them eternal life.</p>
               <h4>Amen.</h4>
           </div>
        </section>
        `;
    }
}

// This first part of code is to make our form realistic
// Get necessary elements





const main = document.querySelector('#main-content').addEventListener('click', addResponsiveness)

function addResponsiveness(e){
        if(event.target.className === 'btn'){
            const disabled = document.querySelector('.disabled');
            const form = document.querySelector('.form')
            const loader = document.querySelector('.loader');
            const success = document.querySelector('.success')
            console.log('class btn')
                console.log('hello')
            // GET ADDITIONAL ELEMENTS
            const surName = document.querySelector('#surname').value;
            const firstName = document.querySelector('#firstname').value;
            
            // DDING RESPONSIVENESS
            disabled.innerHTML = '<button disabled class="btn" type="submit">Submit</button>';
            loader.style.display = 'block';
            setTimeout(function(){
                loader.style.display = 'none';
                success.textContent = `${surName} your information is being processed,you can now proceed with payment.`
                success.style.display = 'block';

                if(success.style.display = 'block'){
                    setTimeout(function(){
                        success.style.display = 'none';
                    }, 5000)
                }
            }, 9000);
            e.preventDefault()
        }
   
    }

