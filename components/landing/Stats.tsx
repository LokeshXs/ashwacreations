export default function StatsSection() {

    return (
       
        <section className="my-20">
            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center ">
                        <h2 className="text-5xl font-bold text-primary">10+</h2>
                        <p className="text-gray-600 mt-2">Projects Delivered</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-primary">100%</h2>
                        <p className="text-gray-600 mt-2">Client Statisfaction</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-5xl font-bold text-primary">3+</h2>
                        <p className="text-gray-600 mt-2">Years of Experience</p>
                    </div>
                </div>
            </div>
        </section>
    )
}