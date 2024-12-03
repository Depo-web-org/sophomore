import CardInfo from "../../../../Components/Common/CardInfo/CardInfo";

export default function ChooseSchool() {
  const Schools = [
    {
      id: "tabs-11",
      Name: "Governmental",
      img: "https://s3-alpha-sig.figma.com/img/2a98/3616/e5024636efe2f32e55f386d3e8330520?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D27fBEk31aLt95ILP7xzHAHzKDEhLet4CwHE1Rew7Bmdq00DAUJVqfa8GjhpDv0dWfxEg92CSbTOnFxZfuBQWC6OgNy201ZIVbPP6Je6IAD1b2MuOGvTbzFsccy3Ox~ilsLO4bt4FPveCbwYAzSaa3jMbkUGW3ylNAWKRQLOoaBvZ-riBKKmSCLdRD9Ebc0dWWpQLspzEkEienOTeMXJ-5Mz0slz8wtheNKDY0VNM95RHuy25vaRCpSDi0Nlh6srpJWGUhladZCV72P9THRWgdPXg~iJgR2eeX-JbnwckrKbKjqnlEeieP-bHOPh9cMJm5AG0RrhXz9d1ml5e-B0FA__",
    },
    {
      id: "tabs-222",
      Name: "American",
      img: "https://s3-alpha-sig.figma.com/img/30dd/1088/087310e134eab859da1f91925daaa7dd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ODq4TdBO2Kf-CierIIrg13imfn3PeTPpsWC6mJ665PTliKhZr-RK2b6zSMkq9WKUH6JWDp0Fbc0tjDD5sxR2Z2Do4LxYK9iaQJctwkxQSQJjf1LCmZNdM7lG-LQCwncvyRekxkgC75Z4BkC-LSzXZxWIRIUWtDd05E-x1vmkVOnLxoMQymZ~oEzkNwDb2XNAKnLE5tN8UgRWLulgwohLfEUsqd8O~FkATzQGM8hGiRH6bFpnV~QLoAX879cVMlTBwdV-VB5LgvmRBHby2vIA35JkZETAZYExeLQtQ1h~PnOsXFdF9FPJZOGYQC0DB4w9BZYOYIqlAlwBHtWyp~xLNg__",
    },
    {
      id: "tabs-333",
      Name: "British",
      img: "https://s3-alpha-sig.figma.com/img/9bf9/9957/e76b1b1978ec2cf1d6a64d67c6feeafd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=olZU0lOxXyfvEhZA9pKucJOgBqPcvTgB0YtXkbcTCVrFf6isBi0xuDuCt45rVVty5PJ4XrZVZ8yzj3CcL9VqDavE6QzusJAM4CI0~vj6X7dLbrJ6uvuCKhp2qYK5BR2b7RJgLV37xYKbjDoT-yTRBSAfLXKqa4a55wBF-yUueN1rJ7CLhuPGAVpSfWPjF1xEknSQTTh4UFvTXn1Shz6Y0ARHyRuRz-qEGW8OgDxnVwnegJZV3rZx9tSH9EeffWuFO933WOpb7R5Ku8mOfcUIgReZ4YUvjcaJmLw-Faisd7jfnE5v1lOgSS7nBhh3hIHxlmN~uztJyRvxBFiXOZPRig__",
    },
    {
      id: "tabs-344",
      Name: "IG Schools",
      img: "https://s3-alpha-sig.figma.com/img/b180/6168/96c7c0083f72c168466f73b09573454e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xb30Y3o~jSzbIZiI6Y5OFpqPsLWCdjGgtbK7i30GOmdIWDET3fX8WkGMgQBv4uN04Bre7UeMOXSxypaYUVuxz~crtPQWYkynLmHfKgGBbaYoioRQfZejX0SxWU-AkD0Jy8DLyCa040PrD1KMA6tg5c40E1tkl6rSaAofaSsvxv16Zd7SIG8QfbAKMUMgLB28x8PNesOH1ImgGGzGYuLF~6MhZAv8~daPW1X-Lr9vekWVyW~Bu9j8uQYqjgIX7j28e29Ep6U~EEubobF4u5TOMDzmVGsl1-iQMXE4kztMDd-I2Iunv4lDWQGU~ZzcMostDMJSGrGpcn1tzI0GmIrzXg__",
    },
    {
      id: "tabs-355",
      Name: "Experimental",
      img: "https://s3-alpha-sig.figma.com/img/9b73/cd60/0af0160fd12b1a5193b4fb7df03cbd39?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtv9MoUDFNkXxbVUM~dvuVYoljWTlTfUeLsVruDTHJkusoHzrZ2UaysE7cA-2BdcneDi4pWeZt7mQNHax-TuLCteiSeoXndqJ9RqJLcNomur1uSkvXgkZo8Yz-3B72v3AVDL~4KP4d8t~cnkCGdUESk0a6QHtGRuOP8g0nQjRwDTFlzaTNCLPBUrW8IjAtv6Xe7rm2YjbgN7bWE9QhLOSvGsX62GH55aQdpNZwNdwsJN7AOcIilNSw7ry-NCu6NqPixgJPKQ-1Mskx2qHxvuIazTAmmTmiZnfDcxfY-EO~vmbnUpmaAy-T9m0R7VIkB-wbR7sCaP4u2HMOoruYdG8A__",
    },
  ];

  return (
    <section className="my-20">
      <div className="text-white font-bold">
        <span className="block text-2xl md:text-4xl pb-2">
          Get Started Now!
        </span>
        <span className="text-2xl cursor-pointer leading-10">
          What type of school do you attend ?
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {Schools.map((item) => {
          return (
           <CardInfo key={item.id} item={item}/>
          );
        })}
      </div>
    </section>
  );
}
