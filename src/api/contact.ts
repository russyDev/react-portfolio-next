import { useMutation } from "@tanstack/react-query";

type SendEmailPayload = {
  name: string;
  email: string;
  message: string;
};

type ResponseType = {
  success: boolean;
  errors?: string[];
};

export const useSendEmail = () => {
  const sendEmail = async (data: SendEmailPayload): Promise<ResponseType> => {
    try {
      const response = await fetch('/api/message/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resp = await response.json();
      if (resp.success) {
        return {
          success: resp.success,
        };
      }

      return { success: false, errors: resp.message };
    } catch (error: any) {
      return { success: false, errors: [error.message] };
    }
  };

  return useMutation({
    mutationFn: sendEmail,
  });
};
