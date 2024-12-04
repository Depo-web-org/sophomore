import CardInfo from "../../Components/Common/CardInfo/CardInfo"

const Subjects = () => {
    const Subject={
        title:"What Subject do you want ?",
        Subject:[
            {
                Name: "Math",
                img: "https://s3-alpha-sig.figma.com/img/04b3/4df9/48692002ed23d2ee151f181d72c54ff6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JIpSmx9mgX0UCa12J4vLpURZKt0DHUwXrMsUzcgmkVK1JVLK3qRo22GJly02ljurAR9nlR0U3OER6gDwjSU3sXEKZjDgb3OuIdMJLXfPckgrA7-IT4jN3y7QWLhCukwKE8QpBA8erP8PkiHPa-XyYcOzHLEIsRX2o56coGbSzOljPPqclG6ta9WOr-UwCDNC9rPP9eQd1Bf-9QhWGKwSCAcnv0eSfkNVzOPGkXnaHzbRqgnXZ~W3jCi2TK64wyaIffurCdpJBC2ubrp1m~rN4lmLEQK0sQgiyW8z4S1xQknOaJstfcpkw-v1WxkclMgiVMAnd~xBFToG2KioFIR5pQ__",
                id: "9ed55700-9020-4582-912e-01f2729fac1b"
            },
            {
                Name: "Science",
                img: "https://s3-alpha-sig.figma.com/img/fb0c/f467/d2174e69a803eddf7b770dbcdf474858?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W0N2BB3ExZ1d8Az-nztvoHgKG-hyGvr5jWVfKc0CdhOAf1YioBMISFLY4F0VW2KcZYAI0ssFyNgx5eWZojZ-Qi9gUdpE1~jYSaiCw9udC3bX8bCcrU1TaznmkTpQKPYWeCzOy7IMUTcoLGJ9lifOQMjbZgB6ya1D5EKLBX7nADjKh7XO7jJqcUZ9eGfOQHRGtBxUp6MxcIpkbhLKd8~FtABPIiqkxrvK1~3-f3SiXKhdvmhX1SBBoxa5V5YlLnVx8IeHz5vAdyZ0GUQcR9WYB8Pt~hE7jevC4t5taVq80BFW6L14JuJnLhmAiNADxmT6rKmXUn7Ms7UsFNPLiXKwPA__",
                id: "4e503374-b490-4ef7-99ab-fb00653979b7"
            },
            {
                Name: "English",
                img: "https://s3-alpha-sig.figma.com/img/345b/d78c/e84456581cdced2e4bfed4fb1ccd341a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RcH7XP7v7rC7JYs1JEcEoHY297AeGAht6pYxb8OqZ6iy07ZC2jUn8Vnso8HXXCQ4Mc25h9TPv-66KhqcMjnVN-EcUefxsr8HCE~lF3~4SWY2-ZEdWdDVOV8t4BuCryRhf51ikYvOTwCNr1~PO8~FjL6X2rkCv6vAklQqNAEbB1jYdJJLlTTyxedO-1o-7MGaw6IV7q80hZVjj0baQyIuKLPELVBf9TpA8OATH60BcNSeqSvKOytZT3L7YMKVInPTfDAN8~J-of8gVl39j46sC7~pK4z84bvS~F0BGBpcoJ3IYDH1fQJm5bCc8m3gvkz34Odh3Zp6z8Mp24w9f3JB5g__",
                id: "9ab92f5a-59f3-4de8-ae9d-4f5a5cc49e48"
            },
            {
                Name: "Arabic",
                img: "https://s3-alpha-sig.figma.com/img/13bb/a78a/7b47f89bea947d081a1b33e4d5345d20?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Td99FG9BA2Zbm0dkA4TZtyCVy1bF6QmcqM74F5gF79N0wjTQXjqpIx7q28-W443Twy5joZN2A4DIz-GKu~Xu~lpEpLFbAjQD9xDgVvUX9rNh5UlSZYXNAORci0eURuZjiGOAUm7zES6hzmpoVx9eSQYw-fVs6K5YyeVRSk4vvJUoYWYsuhrkhovORjq-rarAl9PNc3gRIApeei2Yxq4W7PiKo7ETkabGJTj9DKEPO1pzL4~O5hCdF23RNHgpLGIATdP3zzOdId-W1WrsAHh8-49bG~X5t6cc1MXdEzHr6XgEJVnecolo4~0OMwCH7YcojkUIt6G7Qd8MMP4w3FWycg__",
                id: "df0f3226-2a42-45b9-9161-8605a0d04bc8"
            },
            {
                Name: "Art",
                img: "https://s3-alpha-sig.figma.com/img/2e9c/ecea/fd389b9f6d9f0a6c64c7b5f63b6f477f?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EB-rwaXUDLiDY2WwET-UWj7esxVL0o66gv-7TpMpIIpubOoGvc76~MSA3CvzNW2oS6mgV8zBzZ0Bvbuh4lF6cLsTD287xLPZsLzVCRtkU2xkFp2zDZpiqxmTB2~IpXnRuJpUiAd5v~CQw5IIgpPQzSH~ccwWe4NeTVvrZWHM3Q08yHulxCrUKtZxI2N2a055UPNf6ut4HCSwfZGYpRDioqTGFZ4YA-s3FU1NsiC4IaXzMEZfeSsvr--r8Vg97q65fg00ie26WxnflPNvjX6ELpSYjGTTCTupiKU9-vTQBsAxxgZVVfRrU9~2vts~FckTXk1v3vcgukCfsFVHuXJB6A__",
                id: "9c89728a-7d13-426b-adfa-aa2703ed69b9"
            },
            {
                Name: "Social Studies",
                img: "https://s3-alpha-sig.figma.com/img/688c/3a92/f7703272b30abf55924689f21a4df63a?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AeGMj6oAS1XS1PKTr29niEP4kqGYlBmXR0n1xFfwN6EW7Ku--y6OhABXP46SdCBYYYvzpELClokD09gJXQlARvOogoe5SFfHlNTWmslZyDPWmob4VVES6qzrikRlKQVjtdecMFliI8fH5cdq2yxBmFHOGmVWHibPmd4ENrNhnDK94YcFOzVqPWwIFLkyc~29jFFNWXYHxcxLrJRq7ElKJYfWhL2VR-62fSRPnSeoRD0CaID16pC7GN2SVRifVD4~mQRWvrlCf~8g-Na1lIT4XpHVUr4qGs2r44PNEHA3SjPxqw27HjXcfQhqNg03xFesoT2W0Y3xkz1BPhErYqyjWw__",
                id: "abf24031-daf8-4d7e-a657-64ee37466952"
            }
        ]
    }

    
  return (
    <>
    <section className="min-h-screen w-full pt-24 px-4 lg:px-[124px]">
        <div>
            <h2 className="text-white  text-lg lg:text-4xl font-semibold">
            {Subject.title}
            </h2>
        </div>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-4">
            {
                Subject.Subject.map(subj => <div key={subj.id} className=" col-span-3 lg:col-span-4">
                                            <CardInfo   item={subj} path={`/subjects/${subj.id}`} />
                                        </div>
                )
            }
        
        </div>

    </section>
    </>
  )
}

export default Subjects