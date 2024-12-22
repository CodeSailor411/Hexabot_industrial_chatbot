# Industrial ERP Chatbot: A Customized Solution for Industrial Sustainability  

Welcome to the ** ERP Chatbot Project**, powered by Hexabot! This project leverages Hexabot’s versatile framework to develop a customized chatbot solution integrated with ERP systems to address industrial sustainability and operational efficiency.  

This chatbot empowers industries with AI-driven insights for HR management, supply chain optimization, production analytics, sales forecasting, and environmental compliance. Designed to facilitate workflows and enhance decision-making, it seamlessly integrates with existing ERP systems, enabling real-time data analysis and actionable recommendations.  

---

## Project-Specific Features  

### ERP Integration  
The chatbot interacts with ERP systems to access HR, financial, supply chain, and environmental data. It provides a cohesive solution for monitoring and improving key metrics such as resource utilization, energy consumption, and compliance with environmental regulations.  

### Generative AI with LLMs  
Using Hexabot’s **Gemini Plugin**, the chatbot processes complex user queries, generates actionable insights, and delivers intelligent recommendations, ensuring industries stay ahead of sustainability targets and operational goals.  

### IoT Data Integration  
IoT tracking plugins enable real-time monitoring of production processes and supply chains. For instance, the chatbot tracks shipment delays or machine performance, providing instant alerts and optimization suggestions.  

### Key Modules  
1. **HR Management**: Attendance tracking, leave approvals, and payroll insights.  
2. **Production Analytics**: Machine efficiency, waste reduction metrics, and performance tracking.  
3. **Sales Insights**: Revenue tracking, market forecasts, and sales optimization.  
4. **CSR and Environmental Compliance**: Real-time emissions data, waste management, and compliance checks.  

---

## Getting Started with Optibuddy  

### Installation  
Follow these steps to set up the Optibuddy ERP Chatbot:  

1. **Install Hexabot CLI**:  
   ```bash  
   npm install -g hexabot-cli  

2. **Create Your Project**:
   Use the Hexabot CLI to create a new chatbot project:

   ```bash
   hexabot create my-chatbot
   ```

3. **Configure Your Environment**:

   - Copy the `.env.example` file to `.env` and customize it according to your environment and configuration needs.

   ```bash
   cp .env.example .env
   ```

4. **Run the Project**:
   Navigate into the newly created folder and run the following command to start the project in development mode:

   ```bash
   hexabot dev
   ```

   For production mode, you can use:

   ```bash
   hexabot start
   ```

   _Note_: The first run may take some time as it needs to download all required Docker images.

5. **Configure your NLU Engine**:
   After creating your new project, the **Hexabot LLM-NLU Engine** will be enabled by default. This NLU engine relies on one of the following LLM helpers being present, you can enable one of these by following the steps detailed in [LLM NLU Engine](https://docs.hexabot.ai/user-guide/nlu/nlu-engines/llm-nlu-engine) documentation page:

   - Ollama Helper (`hexabot-helper-ollama`)
   - Google Gemini Helper (`hexabot-helper-gemini`)
   - OpenAI ChatGPT Helper (`hexabot-helper-chatgpt`)

   You must follow the instructions of the selected LLM helper in their specific documentation before starting the project.

## Built-in Features

- **Generative AI Support**: This template includes both the **ollama helper** and **plugin** by default to help you get started with generative AI features.
- **NLU API**: A built-in Natural Language Understanding (NLU) API is provided for intent recognition and language detection.

## Extending Hexabot

You can easily extend Hexabot's functionality by installing additional extensions (channels, helpers, plugins) via npm. Below are some examples:

- Install a new channel (e.g., Messenger):

  ```bash
  npm install hexabot-channel-messenger
  ```

- Install a new plugin (e.g., ChatGPT integration):
  ```bash
  npm install hexabot-plugin-chatgpt
  ```

## Docker Setup

This template comes with a pre-configured **Dockerfile** and **docker-compose.yml** to help you containerize your project quickly.

- **Dockerfile**: Builds your Hexabot-based project.
- **docker-compose.yml**: Defines the necessary services for your project, allowing you to start everything with a single command.

## Documentation

For detailed information on how to get started, as well as in-depth user and developer guides, please refer to our full documentation available in the docs folder or visit the [Documentation](https://docs.hexabot.ai).

## Contributing

We welcome contributions from the community! Whether you want to report a bug, suggest new features, or submit a pull request, your input is valuable to us.

Please refer to our contribution policy first : [How to contribute to Hexabot](https://github.com/Hexastack/Hexabot/blob/main/CONTRIBUTING.md)

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](./CODE_OF_CONDUCT.md)

Feel free to join us on [Discord](https://discord.gg/rNb9t2MFkG)

## License

This software is licensed under the GNU Affero General Public License v3.0 (AGPLv3) with the following additional terms:

1. The name "Hexabot" is a trademark of Hexastack. You may not use this name in derivative works without express written permission.
2. All derivative works must include clear attribution to the original creator and software, Hexastack and Hexabot, in a prominent location (e.g., in the software's "About" section, documentation, and README file).

---

Happy building with Hexabot! 🎉
