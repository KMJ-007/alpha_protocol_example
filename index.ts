import { SignClient } from 'alpha_protocol';

async function main() {
  const client = await new SignClient("comPort").connect();
  
  try {
    console.log('Connected to sign');
  } catch (error) {
    console.error('Error:', error);
  }
}

main();