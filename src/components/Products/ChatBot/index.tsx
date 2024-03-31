import React from 'react';
import { useTitle } from '../../Effects';
import Roadmap from './Roadmap';

const Chatbot: React.FC = () => {
  useTitle('Nomota AI - Meet our advanced chat bot');
  return (
    <div className="py-12 text-center bg-white max-md:p-8">
      <h1>Nomota AI Chatbot</h1>
      <p>
        Nomota AI's Chat Bot is an advanced AI-driven platform designed to engage users in natural, human-like
        conversations. Built on the forefront of artificial intelligence technology, it aims to provide comprehensive
        answers, facilitate interactions, and offer creative solutions across a broad spectrum of inquiries and tasks.
        From delivering instant information to assisting with complex queries, Nomota AI's Chat Bot stands out for its
        ability to understand and respond to user inputs in a conversational manner. It serves as a versatile assistant
        for a variety of needs, including educational support, entertainment, and practical guidance, embodying Nomota
        AI's commitment to blending technology with creativity to enhance digital experiences.
      </p>
      <img src="/chat.png" />
      <div>
        <h2>Features</h2>
        <p>
          Nomota AI's Chat Bot boasts an array of impressive features designed to provide users with an engaging,
          informative, and versatile digital assistant. Here are 10 key features that set it apart:
        </p>
        <div>
          <h3>Natural Language Understanding</h3>
          <p>
            Advanced algorithms enable the chatbot to understand and process natural human language, allowing for fluid
            and natural conversations.
          </p>

          <h3>Contextual Awareness</h3>
          <p>
            It maintains the context of a conversation over multiple exchanges, enabling it to provide coherent and
            relevant responses throughout an interaction.
          </p>

          <h3>Multi-Language Support</h3>
          <p>Nomota AI's Chat Bot can communicate in multiple languages, making it accessible to a global audience.</p>

          <h3>Personalization</h3>
          <p>
            It can tailor responses based on user preferences, history, and behavior, offering a customized experience
            for every user.
          </p>

          <h3>Instant Information Retrieval</h3>
          <p>
            The chatbot can quickly access a vast knowledge base to provide accurate information, answer questions, and
            offer explanations.
          </p>

          <h3>Creative Content Generation</h3>
          <p>
            From writing assistance to generating creative ideas, it harnesses AI to help users with a range of creative
            tasks.
          </p>

          <h3>Voice Interaction</h3>
          <p>
            Voice recognition and synthesis capabilities allow for hands-free operation, enabling users to interact with
            the chatbot through spoken commands.
          </p>

          <h3>Integration with Nomota AI Ecosystem</h3>
          <p>
            Seamlessly integrates with other Nomota AI services, including the staking platform and CPU/GPU marketplace,
            for a unified user experience.
          </p>

          <h3>Learning and Adaptation</h3>
          <p>
            Continuously learns from interactions to improve its responses and adapt to user feedback, ensuring an
            ever-improving service.
          </p>

          <h3>Security and Privacy</h3>
          <p>
            Designed with a strong focus on user privacy and data security, ensuring conversations and user data are
            protected.
          </p>
        </div>
        <p>
          Nomota AI's Chat Bot is not just a tool but a companion, designed to make the digital world more accessible,
          creative, and enjoyable for everyone. With these key features, it stands as a testament to the possibilities
          when technology meets creativity.
        </p>
      </div>
      <Roadmap />
      <div>
        <h1>Beta Phase</h1>
        <p>
          Nomota AI's Chat Bot is currently in its beta phase, an exciting period where we invite users to experience
          the forefront of AI-driven communication. During this beta phase, to ensure the quality and stability of our
          service for all users, there are a couple of temporary limitations in place:
        </p>

        <h2>Daily Message Limit</h2>
        <p>
          Each user is allocated a quota of 100 messages per day. This allows us to manage server loads effectively and
          maintain optimal performance as we continue to refine and enhance the chatbot's capabilities.
        </p>

        <h2>Conversation Length Limit</h2>
        <p>
          To ensure all users can access our services without significant wait times, each conversation is limited to a
          maximum of 10 interactions. This helps in distributing our resources efficiently while still providing
          meaningful and helpful exchanges.
        </p>

        <p>
          These measures are in place to help us scale our services thoughtfully and sustainably, ensuring that every
          interaction with Nomota AI's Chat Bot remains high quality. We appreciate your understanding and cooperation
          during this phase. Your feedback is invaluable as we work towards removing these limitations and expanding our
          offerings in the future.
        </p>
      </div>
    </div>
  );
};

export default Chatbot;
