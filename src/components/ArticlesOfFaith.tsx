import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

interface Article {
  id: string;
  number: number;
  title: string;
  description: string | React.ReactNode;
}

const articles: Article[] = [
  {
    id: "god",
    number: 1,
    title: "God",
    description: "We believe in one eternal, infinite God who is the creator and sustainer of all things. God is holy, loving, and powerful. We understand God as Three in One: Father, Son, and Holy Spirit."
  },
  {
    id: "jesus-christ",
    number: 2,
    title: "Jesus Christ",
    description: (
      <>
        <p className="mb-4">
          We believe in Jesus Christ, the Second Person of the Triune Godhead; that He was eternally one with the Father; that He became incarnate by the Holy Spirit and was born of the Virgin Mary, so that two whole and perfect natures, that is to say the Godhead and manhood, are thus united in one Person very God and very man, the God-man.
        </p>
        <p>
          We believe that Jesus Christ died for our sins, and that He truly arose from the dead and took again His body, together with all things appertaining to the perfection of man's nature, wherewith He ascended into heaven and is there engaged in intercession for us.
        </p>
      </>
    )
  },
  {
    id: "holy-spirit",
    number: 3,
    title: "The Holy Spirit",
    description: "We believe in the Holy Spirit, the power of God working in the world and in our lives. The Holy Spirit convicts us of sin, gives us new life, makes us holy, and guides us into all truth."
  },
  {
    id: "bible",
    number: 4,
    title: "The Bible",
    description: "We believe the Bible is God's Word, inspired and trustworthy. The 66 books of the Old and New Testaments show us God's will for our salvation and how we should live."
  },
  {
    id: "sin",
    number: 5,
    title: "Sin",
    description: "We believe sin came into the world through human disobedience. All people sin. Sin separates us from God, but God offers forgiveness and grace to all who turn to Him."
  },
  {
    id: "atonement",
    number: 6,
    title: "Atonement",
    description: "We believe Jesus Christ's suffering and death on the cross made full payment for all human sin. This forgiveness is offered to everyone and is the only way to salvation."
  },
  {
    id: "grace",
    number: 7,
    title: "Grace",
    description: "We believe God's grace is freely given to all people through Jesus Christ. This grace enables us to turn from sin, believe in Jesus for forgiveness, and live righteously. God created us with the ability to choose right or wrong."
  },
  {
    id: "repentance",
    number: 8,
    title: "Repentance",
    description: "We believe the Holy Spirit helps all who repent to turn away from sin toward righteousness, believe in Jesus for forgiveness, and follow His commands. Repentance means genuine sorrow for sin and a sincere desire to change."
  },
  {
    id: "justification",
    number: 9,
    title: "Being Made Right with God",
    description: "We believe that when we believe in Jesus and repent, God declares us forgiven (justification), gives us new spiritual life (regeneration), and makes us His children (adoption). These three things happen together and the Holy Spirit confirms it in our hearts."
  },
  {
    id: "holiness",
    number: 10,
    title: "Growing in Holiness",
    description: "We believe God transforms believers to become holy and Christlike. This happens partly at conversion (initial sanctification) and partly through continued spiritual growth. God's grace empowers us to live free from sin's control and in complete devotion to Him."
  },
  {
    id: "church",
    number: 11,
    title: "The Church",
    description: "We believe in the Church as the community of believers who confess Jesus Christ as Lord. The Church is Christ's body, called together by the Holy Spirit. The Church's mission is to make disciples, show compassion, work for justice, and witness to God's kingdom."
  },
  {
    id: "baptism",
    number: 12,
    title: "Baptism",
    description: "We believe in Christian baptism as commanded by Jesus. Baptism symbolizes acceptance of Jesus' forgiveness and joining Christ's body, the Church. Believers should be baptized to show their commitment to obedience and holiness. Baptism can be done by sprinkling, pouring, or immersion."
  },
  {
    id: "communion",
    number: 13,
    title: "The Lord's Supper (Communion)",
    description: "We believe the Communion Supper that Jesus instituted is sacred. It proclaims Jesus' death and resurrection and His coming again. Christ is present through the Holy Spirit. All believers are invited to participate in faith and remembrance of Christ's sacrifice."
  },
  {
    id: "healing",
    number: 14,
    title: "Divine Healing",
    description: "We believe in the biblical truth of divine healing and encourage prayer for the sick. We also believe God heals through medical science. Both are expressions of God's care for us."
  },
  {
    id: "second-coming",
    number: 15,
    title: "The Second Coming of Christ",
    description: "We believe Jesus Christ will return in glory to fully establish God's kingdom. He will renew creation, and all evil will be defeated. Those who believe in Jesus will be with Him forever in a renewed heaven and earth, free from suffering and death."
  },
  {
    id: "resurrection",
    number: 16,
    title: "Resurrection, Judgment, and Destiny",
    description: "We believe all people will be resurrected—both the righteous and unrighteous. God will judge all people according to their deeds. Those who have faith in Christ will have eternal life with God, while those who reject Him will face eternal separation from God."
  }
];

export default function ArticlesOfFaith() {
  const [expandedArticles, setExpandedArticles] = useState(new Set(["god", "jesus-christ", "holy-spirit", "bible", "sin"]));

  const handleExpandMore = () => {
    const allIds = new Set(articles.map(a => a.id));
    setExpandedArticles(allIds);
  };

  const handleCollapseMore = () => {
    setExpandedArticles(new Set(["god", "jesus-christ", "holy-spirit", "bible", "sin"]));
  };

  const hasMoreHidden = expandedArticles.size <= 5;

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
      <div className="md:col-span-3">
        <h2 className="text-2xl font-display text-primary-800 mb-6">Articles of Faith</h2>

        <p className="mb-6">
          The following are the essential tenets of our faith. While this is not an exhaustive statement of our beliefs, it represents the core doctrines to which we hold:
        </p>

        <Accordion type="multiple" value={Array.from(expandedArticles)} onValueChange={(newValues) => {
          if (Array.isArray(newValues)) {
            setExpandedArticles(new Set(newValues));
          }
        }} className="w-full">
          {articles.map((article) => (
            <AccordionItem key={article.id} value={article.id} className="border-b border-primary-100 last:border-0">
              <AccordionTrigger className="text-left py-4">
                <span className="font-medium text-primary-800 text-base">
                  {article.number}. {article.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {article.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {hasMoreHidden && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleExpandMore}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-100 border border-primary-200 text-primary-800 hover:bg-primary-200 transition-colors text-sm font-medium"
            >
              Read More
              <ChevronDown size={16} className="transition-transform" />
            </button>
          </div>
        )}

        {!hasMoreHidden && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleCollapseMore}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary-100 border border-primary-200 text-primary-800 hover:bg-primary-200 transition-colors text-sm font-medium"
            >
              Show Less
              <ChevronDown size={16} className="transition-transform rotate-180" />
            </button>
          </div>
        )}
      </div>
      
      <div className="md:col-span-2">
        <div className="bg-primary-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-display text-primary-800 mb-4">Scripture Foundation</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-primary-100 p-2 rounded-full mr-3 shrink-0 text-primary-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs italic">"All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness, so that the servant of God may be thoroughly equipped for every good work."</p>
                <p className="text-xs font-medium mt-1">2 Timothy 3:16-17</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-primary-100 p-2 rounded-full mr-3 shrink-0 text-primary-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs italic">"Jesus answered, 'I am the way and the truth and the life. No one comes to the Father except through me.'"</p>
                <p className="text-xs font-medium mt-1">John 14:6</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white border border-primary-100 p-6 rounded-lg">
          <h3 className="text-lg font-display text-primary-800 mb-3">Putting Faith into Action</h3>
          <p className="text-sm mb-4">
            We believe that faith is more than intellectual assent to doctrines. True faith transforms our hearts and manifests itself in loving actions toward God and others.
          </p>
          <p className="text-sm">
            Through worship, fellowship, discipleship, and service, we live out our beliefs in ways that honor God and bless others. We invite you to join us as we seek to grow in faith and put our beliefs into practice.
          </p>
        </div>
      </div>
    </div>
  );
}
