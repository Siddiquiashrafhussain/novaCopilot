from strands import Agent
from strands.models import BedrockModel
from strands_tools import calculator, editor, file_read, file_write, shell, http_request, graph, swarm, use_agent, think

AWS_REGION="us-east-1"
MODEL_ID="global.amazon.nova-2-lite-v1:0"
MAX_REASONING_EFFORT="low" # low, medium, high

SYSTEM_PROMPT = (
    "You are a helpful assistant. "
    "Follow the instructions from the user. "
    "To help you with your tasks, you can dynamically create specialized agents and orchestrate complex workflows."
)

bedrock_model = BedrockModel(
    region_name=AWS_REGION,
    model_id=MODEL_ID,
    additional_request_fields={
        "reasoningConfig": {
            "type": "enabled", # enabled, disabled (default)
            "maxReasoningEffort": MAX_REASONING_EFFORT
        }
    }
)

agent = Agent(
    model=bedrock_model,
    system_prompt=SYSTEM_PROMPT,
    tools=[calculator, editor, file_read, file_write, shell, http_request, graph, swarm, use_agent, think]
)

while True:
    try:
        prompt = input("\nEnter your question (or 'quit' to exit): ").strip()
        if prompt.lower() in ['quit', 'exit', 'q']:
            break
        if len(prompt) > 0:
            agent(prompt)
    except KeyboardInterrupt:
        break
    except EOFError:
        break

print("\nGoodbye!")
