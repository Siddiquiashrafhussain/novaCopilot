import boto3

AWS_REGION="us-east-1"
MODEL_ID="global.amazon.nova-2-lite-v1:0"
MAX_REASONING_EFFORT="low" # low, medium, high

bedrock_runtime = boto3.client("bedrock-runtime", region_name=AWS_REGION)

# Enable extended thinking for complex problem-solving
response = bedrock_runtime.converse(
    modelId=MODEL_ID,
    messages=[{
        "role": "user",
        "content": [{"text": "I need to optimize a logistics network with 5 warehouses, 12 distribution centers, and 200 retail locations. The goal is to minimize total transportation costs while ensuring no location is more than 50 miles from a distribution center. What approach should I take?"}]
    }],
    additionalModelRequestFields={
        "reasoningConfig": {
            "type": "enabled", # enabled, disabled (default)
            "maxReasoningEffort": MAX_REASONING_EFFORT
        }
    }
)

# The response will contain reasoning blocks followed by the final answer
for block in response["output"]["message"]["content"]:
    if "reasoningContent" in block:
        reasoning_text = block["reasoningContent"]["reasoningText"]["text"]
        print(f"Nova's thinking process:\n{reasoning_text}\n")
    elif "text" in block:
        print(f"Final recommendation:\n{block['text']}")
