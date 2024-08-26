
const Accordion = () => {
    return (
        <div className="lg:w-[50%] w-[80%] mx-auto pt-10 pb-28">
            <div className="collapse collapse-arrow bg-base-200 m-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium p-4">Monitoring Baby&apos;s Emotion</div>
                <div className="collapse-content">
                    <p>Emotion detection can help parents and caregivers monitor a baby&apos;s emotional state. It can alert them if the baby is distressed, crying, or showing signs of discomfort, ensuring prompt attention and care.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 m-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium p-4">Health and Well-being</div>
                <div className="collapse-content">
                    <p>Monitoring a baby&apos;s emotions can be part of a broader strategy to track their overall health and well-being. It can help detect issues such as colic, sleep disturbances, or other conditions that might cause distress.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 m-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Parenting Assistance</div>
                <div className="collapse-content">
                    <p>For new parents, an emotion detection system can provide valuable insights and support, helping them understand their baby&apos;s needs and emotional cues better.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 m-2">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Convenience for busy parents</div>
                <div className="collapse-content">
                    <p>For busy parents, an automated system that can monitor their baby&apos;s emotions and notify them when needed provides convenience and peace of mind.</p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;